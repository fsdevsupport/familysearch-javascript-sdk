## Migrating from v1 to v2

The first major change in v2 is that you can no longer specify the `http_function`,
`deferred_function`, and `timeout_function` for the SDK. It now ships with built-in
HTTP and promise libraries. This was done for a few important reasons:

* Simpler code base
* Enables better testing
* Standardized response format
* Better promise format (primarily internally)

### Promises



### Responses

All SDK methods that issue HTTP requests will return a standard response object
with HTTP methods for accessing the status, body, and headers. The same convenience
methods for accessing the response data are still added as before. The standard
response methods are detailed in the main page of the documentation. Any available
convenience functions are explained in the particular method's documentation.

In v1, `POST` and `DELETE` requests often returned an ID or a URL for the data that
was being changed. This was done because the object was not usually updated itself
with the new ID after being saved. Therefore returning the ID was the only way
to tell what the new ID was. In v2 objects are updated after being saved,
both with an ID and any new links. This also allows the SDK to return a regular
response object for all methods as explained in the previous paragraph.

### Collections

v2 replaced the [old Discovery](https://familysearch.org/developers/docs/api/discovery/Discovery_resource)
resource with the [new Collections resources](https://familysearch.org/developers/docs/api/resources#discovery).
The primary effect of this change is that most SDK methods require a full URL as opposed
to also accepting an ID. This is because, with Collections, not all resources are
directly accessible.

For example, in v1, to get a person's change history you could call an SDK method
with just the person's ID.

```js
client.getPersonChanges(personId);
```

There are two options for doing this in v2.

1. Call a method on the person object. This is the preferred method.

    ```js
    client.getPerson(personId).then(function(personResponse){
      return personResponse.getPerson().getChanges();
    }).then(function(changeHistoryResponse){
      
    });
    ```

2. Pass in the full URL of the person changes URL.

    ```js
    var changesUrl = 'https://familysearch.org/platform/tree/persons/PPPP-PPP/changes';
    client.getChanges(changesUrl).then(function(changesResponse){
      
    });
    ```
    
    This is example assumes you have the person changes URL, but to get it you have
    to first request the person. So in reality you have to do this:
    
    ```js
    client.getPerson(personId).then(function(personResponse){
      var changesUrl = personResponse.getPerson().getLink('change-history');
      client.getChanges(changesUrl).then(function(changesResponse){
      
      });
    });
    ```
    
    The first method is preferred because you don't have to worry about the URLs.

### $ Prefix Removed

### Base Class Methods

### Angular

For Angular users, since the SDK is no longer using `$http`, `$q`, and `$timeout`,
you'll have to begin calling `$scope.apply()` when updating your app with data
from the SDK.

```js
fsClient.getCurrentUser().then(function(response) {
  $scope.apply(function(){
    $scope.contactName = response.getUser().getContactName();
  });
});
```

## Migrating from v0.9 to v1

The main change in v1.0 is that the SDK is no longer a static library with methods
called on a global object. Now you create an instance of the SDK.

```js
var client = new FamilySearch({
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'YOUR_REDIRECT_URI'
});
```

Now you call the API methods directly on the new instance.

```js
client.getPerson('PPPP-PPP').then(function(response){

});
```

If you are creating data then you should no longer use the object constructors.
Previously you would create a person with `new FamilySearch.Person()`. 
Now that we have an instance of the SDK instead of a global object, the person you 
create needs a reference to your client instance. Without a reference to the client
you can't save or delete the object.

To make this easy for you, we provide a method for every class that creates the 
object and sets a reference to the client. The methods begin with `create` and
end with the class's name.

```js
var person = client.createPerson();
```