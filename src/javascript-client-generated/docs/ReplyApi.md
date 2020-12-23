# ZhihuCaffe.ReplyApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReply**](ReplyApi.md#createReply) | **POST** /users/{userid}/articles/{articleid}/replies/new | create an reply in a specified article
[**getReplies**](ReplyApi.md#getReplies) | **GET** /api/users/{userid}/articles/{articleid}/replies | get replies list in a specified article
[**getReply**](ReplyApi.md#getReply) | **GET** /api/users/{userid}/articles/{articleid}/replies/{replyid} | get a reply with reply id in a specified article
[**likeReply**](ReplyApi.md#likeReply) | **PUT** /users/{userid}/articles/{articleid}/replies/{replyid}/like | like a reply in a specified article

<a name="createReply"></a>
# **createReply**
> createReply(userid, articleid, reply)

create an reply in a specified article

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.ReplyApi();
let userid = 56; // Number | 
let articleid = 56; // Number | 
let reply = new ZhihuCaffe.Reply(); // Reply | 

apiInstance.createReply(userid, articleid, reply, (error, data, response) => {
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
 **reply** | [**Reply**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getReplies"></a>
# **getReplies**
> Replies getReplies(userid, articleid, opts)

get replies list in a specified article

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.ReplyApi();
let userid = 56; // Number | 
let articleid = 56; // Number | 
let opts = { 
  'pageNumber': 56, // Number | Page number
  'pageSize': 56 // Number | Number of persons returned
};
apiInstance.getReplies(userid, articleid, opts, (error, data, response) => {
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
 **pageNumber** | **Number**| Page number | [optional] 
 **pageSize** | **Number**| Number of persons returned | [optional] 

### Return type

[**Replies**](Replies.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReply"></a>
# **getReply**
> Reply getReply(userid, articleid, replyid)

get a reply with reply id in a specified article

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.ReplyApi();
let userid = 56; // Number | 
let articleid = 56; // Number | 
let replyid = 56; // Number | 

apiInstance.getReply(userid, articleid, replyid, (error, data, response) => {
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
 **replyid** | **Number**|  | 

### Return type

[**Reply**](Reply.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="likeReply"></a>
# **likeReply**
> likeReply(userid, articleid, replyid)

like a reply in a specified article

### Example
```javascript
import ZhihuCaffe from 'Zhihu_Caffee';

let apiInstance = new ZhihuCaffe.ReplyApi();
let userid = 56; // Number | 
let articleid = 56; // Number | 
let replyid = 56; // Number | 

apiInstance.likeReply(userid, articleid, replyid, (error, data, response) => {
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
 **replyid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

