# ZhihuCaffe.TagApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagApi.md#createTag) | **POST** /tags/new | 
[**getTags**](TagApi.md#getTags) | **GET** /api/tags | get tag list
[**searchArticlesByTag**](TagApi.md#searchArticlesByTag) | **GET** /api/tags/{tagname}/articles | 

<a name="createTag"></a>
# **createTag**
> createTag(tag)



### Example
```javascript
import ZhihuCaffe from 'zhihu_caffe';

let apiInstance = new ZhihuCaffe.TagApi();
let tag = new ZhihuCaffe.Tag(); // Tag | 

apiInstance.createTag(tag, (error, data, response) => {
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
 **tag** | [**Tag**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getTags"></a>
# **getTags**
> Tags getTags(opts)

get tag list

Returns a list containing all tags.

### Example
```javascript
import ZhihuCaffe from 'zhihu_caffe';

let apiInstance = new ZhihuCaffe.TagApi();
let opts = { 
  'pageNumber': 56, // Number | Page number
  'pageSize': 56 // Number | Number of persons returned
};
apiInstance.getTags(opts, (error, data, response) => {
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

[**Tags**](Tags.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchArticlesByTag"></a>
# **searchArticlesByTag**
> Articles searchArticlesByTag(tagname, opts)



### Example
```javascript
import ZhihuCaffe from 'zhihu_caffe';

let apiInstance = new ZhihuCaffe.TagApi();
let tagname = "tagname_example"; // String | 
let opts = { 
  'pageNumber': 56, // Number | Page number
  'pageSize': 56 // Number | Number of persons returned
};
apiInstance.searchArticlesByTag(tagname, opts, (error, data, response) => {
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
 **tagname** | **String**|  | 
 **pageNumber** | **Number**| Page number | [optional] 
 **pageSize** | **Number**| Number of persons returned | [optional] 

### Return type

[**Articles**](Articles.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

