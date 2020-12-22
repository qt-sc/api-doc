# ZhihuCaffe.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApis**](DefaultApi.md#getApis) | **GET** /api | get apis list

<a name="getApis"></a>
# **getApis**
> Apis getApis()

get apis list

Returns a list containing all apis.

### Example
```javascript
import ZhihuCaffe from 'zhihu_caffe';

let apiInstance = new ZhihuCaffe.DefaultApi();
apiInstance.getApis((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Apis**](Apis.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

