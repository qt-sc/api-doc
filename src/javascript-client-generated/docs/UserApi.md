# ZhihuCaffe.UserApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /users/{userid} | delete an existed user by userid
[**getUserInfo**](UserApi.md#getUserInfo) | **GET** /api/users/{userid} | 
[**getUsers**](UserApi.md#getUsers) | **GET** /api/users | get users list
[**updateUser**](UserApi.md#updateUser) | **PUT** /users/{userid} | update an existed user info by userid
[**userLogin**](UserApi.md#userLogin) | **POST** /users/login | 
[**userLogout**](UserApi.md#userLogout) | **GET** /users/logout | 
[**userSignup**](UserApi.md#userSignup) | **POST** /users/signup | create a user in sign up page

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userid)

delete an existed user by userid

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.UserApi();
let userid = 56; // Number | 

apiInstance.deleteUser(userid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUserInfo"></a>
# **getUserInfo**
> User getUserInfo(userid)



### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.UserApi();
let userid = 56; // Number | 

apiInstance.getUserInfo(userid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> Users getUsers(opts)

get users list

Returns a list containing all users.

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.UserApi();
let opts = { 
  'pageNumber': 56, // Number | Page number
  'pageSize': 56 // Number | Number of persons returned
};
apiInstance.getUsers(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | **Number**| Page number | [optional] 
 **pageSize** | **Number**| Number of persons returned | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> updateUser(user, userid)

update an existed user info by userid

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.UserApi();
let user = new ZhihuCaffe.User(); // User | 
let userid = 56; // Number | 

apiInstance.updateUser(user, userid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](.md)|  | 
 **userid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userLogin"></a>
# **userLogin**
> userLogin(userid, password)



### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.UserApi();
let userid = 56; // Number | 
let password = "password_example"; // String | 

apiInstance.userLogin(userid, password, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **Number**|  | 
 **password** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userLogout"></a>
# **userLogout**
> userLogout(opts)



### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.UserApi();
let opts = { 
  'token': "token_example" // String | 
};
apiInstance.userLogout(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userSignup"></a>
# **userSignup**
> userSignup(user)

create a user in sign up page

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.UserApi();
let user = new ZhihuCaffe.User(); // User | 

apiInstance.userSignup(user, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

