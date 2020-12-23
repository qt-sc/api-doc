# ZhihuCaffe.ArticleApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createArticle**](ArticleApi.md#createArticle) | **POST** /users/{userid}/articles/new | create an article by a user with specified userid
[**deleteArticle**](ArticleApi.md#deleteArticle) | **DELETE** /users/{userid}/articles/{articleid} | delete an article by userid and article id
[**getArticle**](ArticleApi.md#getArticle) | **GET** /api/users/{userid}/articles/{articleid} | get article by specified article id
[**getArticles**](ArticleApi.md#getArticles) | **GET** /api/users/{userid}/articles | get articles list written by a user with specified user id
[**likeArticle**](ArticleApi.md#likeArticle) | **PUT** /users/{userid}/articles/{articleid}/like | like an article
[**updateArticle**](ArticleApi.md#updateArticle) | **PUT** /users/{userid}/articles/{articleid} | update an existed article info by userid and article id

<a name="createArticle"></a>
# **createArticle**
> createArticle(userid, article)

create an article by a user with specified userid

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.ArticleApi();
let userid = 56; // Number | 
let article = new ZhihuCaffe.Article(); // Article | 

apiInstance.createArticle(userid, article, (error, data, response) => {
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
 **article** | [**Article**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteArticle"></a>
# **deleteArticle**
> deleteArticle(userid, articleid)

delete an article by userid and article id

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.ArticleApi();
let userid = 56; // Number | 
let articleid = 56; // Number | 

apiInstance.deleteArticle(userid, articleid, (error, data, response) => {
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
 **articleid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getArticle"></a>
# **getArticle**
> Article getArticle(userid, articleid)

get article by specified article id

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.ArticleApi();
let userid = 56; // Number | 
let articleid = 56; // Number | 

apiInstance.getArticle(userid, articleid, (error, data, response) => {
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
 **articleid** | **Number**|  | 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getArticles"></a>
# **getArticles**
> Articles getArticles(userid, opts)

get articles list written by a user with specified user id

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.ArticleApi();
let userid = 56; // Number | 
let opts = { 
  'pageNumber': 56, // Number | Page number
  'pageSize': 56 // Number | Number of persons returned
};
apiInstance.getArticles(userid, opts, (error, data, response) => {
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
 **pageNumber** | **Number**| Page number | [optional] 
 **pageSize** | **Number**| Number of persons returned | [optional] 

### Return type

[**Articles**](Articles.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="likeArticle"></a>
# **likeArticle**
> likeArticle(userid, articleid)

like an article

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.ArticleApi();
let userid = 56; // Number | 
let articleid = 56; // Number | 

apiInstance.likeArticle(userid, articleid, (error, data, response) => {
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
 **articleid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateArticle"></a>
# **updateArticle**
> updateArticle(userid, articleid)

update an existed article info by userid and article id

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.ArticleApi();
let userid = 56; // Number | 
let articleid = 56; // Number | 

apiInstance.updateArticle(userid, articleid, (error, data, response) => {
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
 **articleid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

