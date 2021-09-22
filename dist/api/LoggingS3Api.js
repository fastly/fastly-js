"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCompressionCodec = _interopRequireDefault(require("../model/LoggingCompressionCodec"));

var _LoggingFormatVersion = _interopRequireDefault(require("../model/LoggingFormatVersion"));

var _LoggingMessageType = _interopRequireDefault(require("../model/LoggingMessageType"));

var _LoggingPlacement = _interopRequireDefault(require("../model/LoggingPlacement"));

var _LoggingS3Response = _interopRequireDefault(require("../model/LoggingS3Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingS3 service.
* @module api/LoggingS3Api
* @version 3.0.0-alpha1
*/
var LoggingS3Api = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingS3Api. 
  * @alias module:api/LoggingS3Api
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingS3Api(apiClient) {
    _classCallCheck(this, LoggingS3Api);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a S3 for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
   * @param {module:model/LoggingFormatVersion} [options.format_version]
   * @param {String} [options.name] - The name for the real-time logging configuration.
   * @param {module:model/LoggingPlacement} [options.placement]
   * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
   * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
   * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
   * @param {module:model/LoggingMessageType} [options.message_type]
   * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
   * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
   * @param {String} [options.access_key] - The access key for your S3 account. Not required if `iam_role` is provided.
   * @param {String} [options.acl] - The access control list (ACL) specific request header. See the AWS documentation for [Access Control List (ACL) Specific Request Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadInitiate.html#initiate-mpu-acl-specific-request-headers) for more information.
   * @param {String} [options.bucket_name] - The bucket name for S3 account.
   * @param {String} [options.domain] - The domain of the Amazon S3 endpoint.
   * @param {String} [options.iam_role] - The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if `access_key` and `secret_key` are provided.
   * @param {String} [options.path='null'] - The path to upload logs to.
   * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
   * @param {String} [options.redundancy='null'] - The S3 redundancy level.
   * @param {String} [options.secret_key] - The secret key for your S3 account. Not required if `iam_role` is provided.
   * @param {String} [options.server_side_encryption='null'] - Set this to `AES256` or `aws:kms` to enable S3 Server Side Encryption.
   * @param {String} [options.server_side_encryption_kms_key_id='null'] - Optional server-side KMS Key Id. Must be set if `server_side_encryption` is set to `aws:kms` or `AES256`.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingS3Response} and HTTP response
   */


  _createClass(LoggingS3Api, [{
    key: "createLogAwsS3WithHttpInfo",
    value: function createLogAwsS3WithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'compression_codec': options['compression_codec'],
        'gzip_level': options['gzip_level'],
        'message_type': options['message_type'],
        'period': options['period'],
        'timestamp_format': options['timestamp_format'],
        'access_key': options['access_key'],
        'acl': options['acl'],
        'bucket_name': options['bucket_name'],
        'domain': options['domain'],
        'iam_role': options['iam_role'],
        'path': options['path'],
        'public_key': options['public_key'],
        'redundancy': options['redundancy'],
        'secret_key': options['secret_key'],
        'server_side_encryption': options['server_side_encryption'],
        'server_side_encryption_kms_key_id': options['server_side_encryption_kms_key_id']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingS3Response["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/s3', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a S3 for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.access_key] - The access key for your S3 account. Not required if `iam_role` is provided.
     * @param {String} [options.acl] - The access control list (ACL) specific request header. See the AWS documentation for [Access Control List (ACL) Specific Request Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadInitiate.html#initiate-mpu-acl-specific-request-headers) for more information.
     * @param {String} [options.bucket_name] - The bucket name for S3 account.
     * @param {String} [options.domain] - The domain of the Amazon S3 endpoint.
     * @param {String} [options.iam_role] - The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if `access_key` and `secret_key` are provided.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.redundancy='null'] - The S3 redundancy level.
     * @param {String} [options.secret_key] - The secret key for your S3 account. Not required if `iam_role` is provided.
     * @param {String} [options.server_side_encryption='null'] - Set this to `AES256` or `aws:kms` to enable S3 Server Side Encryption.
     * @param {String} [options.server_side_encryption_kms_key_id='null'] - Optional server-side KMS Key Id. Must be set if `server_side_encryption` is set to `aws:kms` or `AES256`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingS3Response}
     */

  }, {
    key: "createLogAwsS3",
    value: function createLogAwsS3() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogAwsS3WithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the S3 for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_s3_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogAwsS3WithHttpInfo",
    value: function deleteLogAwsS3WithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_s3_name' is set.


      if (options['logging_s3_name'] === undefined || options['logging_s3_name'] === null) {
        throw new Error("Missing the required parameter 'logging_s3_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_s3_name': options['logging_s3_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the S3 for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_s3_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogAwsS3",
    value: function deleteLogAwsS3() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogAwsS3WithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the S3 for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_s3_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingS3Response} and HTTP response
     */

  }, {
    key: "getLogAwsS3WithHttpInfo",
    value: function getLogAwsS3WithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_s3_name' is set.


      if (options['logging_s3_name'] === undefined || options['logging_s3_name'] === null) {
        throw new Error("Missing the required parameter 'logging_s3_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_s3_name': options['logging_s3_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingS3Response["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the S3 for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_s3_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingS3Response}
     */

  }, {
    key: "getLogAwsS3",
    value: function getLogAwsS3() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogAwsS3WithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the S3s for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingS3Response>} and HTTP response
     */

  }, {
    key: "listLogAwsS3WithHttpInfo",
    value: function listLogAwsS3WithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LoggingS3Response["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/s3', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the S3s for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingS3Response>}
     */

  }, {
    key: "listLogAwsS3",
    value: function listLogAwsS3() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogAwsS3WithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the S3 for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_s3_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.access_key] - The access key for your S3 account. Not required if `iam_role` is provided.
     * @param {String} [options.acl] - The access control list (ACL) specific request header. See the AWS documentation for [Access Control List (ACL) Specific Request Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadInitiate.html#initiate-mpu-acl-specific-request-headers) for more information.
     * @param {String} [options.bucket_name] - The bucket name for S3 account.
     * @param {String} [options.domain] - The domain of the Amazon S3 endpoint.
     * @param {String} [options.iam_role] - The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if `access_key` and `secret_key` are provided.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.redundancy='null'] - The S3 redundancy level.
     * @param {String} [options.secret_key] - The secret key for your S3 account. Not required if `iam_role` is provided.
     * @param {String} [options.server_side_encryption='null'] - Set this to `AES256` or `aws:kms` to enable S3 Server Side Encryption.
     * @param {String} [options.server_side_encryption_kms_key_id='null'] - Optional server-side KMS Key Id. Must be set if `server_side_encryption` is set to `aws:kms` or `AES256`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingS3Response} and HTTP response
     */

  }, {
    key: "updateLogAwsS3WithHttpInfo",
    value: function updateLogAwsS3WithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_s3_name' is set.


      if (options['logging_s3_name'] === undefined || options['logging_s3_name'] === null) {
        throw new Error("Missing the required parameter 'logging_s3_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_s3_name': options['logging_s3_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'compression_codec': options['compression_codec'],
        'gzip_level': options['gzip_level'],
        'message_type': options['message_type'],
        'period': options['period'],
        'timestamp_format': options['timestamp_format'],
        'access_key': options['access_key'],
        'acl': options['acl'],
        'bucket_name': options['bucket_name'],
        'domain': options['domain'],
        'iam_role': options['iam_role'],
        'path': options['path'],
        'public_key': options['public_key'],
        'redundancy': options['redundancy'],
        'secret_key': options['secret_key'],
        'server_side_encryption': options['server_side_encryption'],
        'server_side_encryption_kms_key_id': options['server_side_encryption_kms_key_id']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingS3Response["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the S3 for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_s3_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.access_key] - The access key for your S3 account. Not required if `iam_role` is provided.
     * @param {String} [options.acl] - The access control list (ACL) specific request header. See the AWS documentation for [Access Control List (ACL) Specific Request Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadInitiate.html#initiate-mpu-acl-specific-request-headers) for more information.
     * @param {String} [options.bucket_name] - The bucket name for S3 account.
     * @param {String} [options.domain] - The domain of the Amazon S3 endpoint.
     * @param {String} [options.iam_role] - The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if `access_key` and `secret_key` are provided.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.redundancy='null'] - The S3 redundancy level.
     * @param {String} [options.secret_key] - The secret key for your S3 account. Not required if `iam_role` is provided.
     * @param {String} [options.server_side_encryption='null'] - Set this to `AES256` or `aws:kms` to enable S3 Server Side Encryption.
     * @param {String} [options.server_side_encryption_kms_key_id='null'] - Optional server-side KMS Key Id. Must be set if `server_side_encryption` is set to `aws:kms` or `AES256`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingS3Response}
     */

  }, {
    key: "updateLogAwsS3",
    value: function updateLogAwsS3() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogAwsS3WithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingS3Api;
}();

exports["default"] = LoggingS3Api;