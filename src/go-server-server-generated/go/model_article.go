/*
 * zhihu_caffe
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 0.0.2
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

type Article struct {

	ReadNum int32 `json:"readNum,omitempty"`

	LikeNum int32 `json:"likeNum,omitempty"`

	Content string `json:"content,omitempty"`

	Replies []Reply `json:"replies,omitempty"`

	Tags []Tag `json:"tags,omitempty"`
}