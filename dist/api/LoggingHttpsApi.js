"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingFormatVersion = _interopRequireDefault(require("../model/LoggingFormatVersion"));

var _LoggingHttpsResponse = _interopRequireDefault(require("../model/LoggingHttpsResponse"));

var _LoggingMessageType = _interopRequireDefault(require("../model/LoggingMessageType"));

var _LoggingPlacement = _interopRequireDefault(require("../model/LoggingPlacement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingHttps service.
* @module api/LoggingHttpsApi
* @version 3.0.0-alpha1
*/
var LoggingHttpsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingHttpsApi. 
  * @alias module:api/LoggingHttpsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingHttpsApi(apiClient) {
    _classCallCheck(this, LoggingHttpsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create an HTTPS object for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
   * @param {module:model/LoggingFormatVersion} [options.format_version]
   * @param {String} [options.name] - The name for the real-time logging configuration.
   * @param {module:model/LoggingPlacement} [options.placement]
   * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
   * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
   * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
   * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
   * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
   * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` (no limit).
   * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` (no limit).
   * @param {String} [options.content_type='null'] - Content type of the header sent with the request.
   * @param {String} [options.header_name='null'] - Name of the custom header sent with the request.
   * @param {String} [options.header_value='null'] - Value of the custom header sent with the request.
   * @param {module:model/String} [options.json_format] - Enforces valid JSON formatting for log entries.
   * @param {module:model/LoggingMessageType} [options.message_type]
   * @param {module:model/String} [options.method='POST'] - HTTP method used for request.
   * @param {String} [options.url] - The URL to send logs to. Must use HTTPS. Required.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingHttpsResponse} and HTTP response
   */


  _createClass(LoggingHttpsApi, [{
    key: "createLogHttpsWithHttpInfo",
    value: function createLogHttpsWithHttpInfo() {
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
        'tls_ca_cert': options['tls_ca_cert'],
        'tls_client_cert': options['tls_client_cert'],
        'tls_client_key': options['tls_client_key'],
        'tls_hostname': options['tls_hostname'],
        'request_max_bytes': options['request_max_bytes'],
        'request_max_entries': options['request_max_entries'],
        'content_type': options['content_type'],
        'header_name': options['header_name'],
        'header_value': options['header_value'],
        'json_format': options['json_format'],
        'message_type': options['message_type'],
        'method': options['method'],
        'url': options['url']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingHttpsResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/https', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create an HTTPS object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` (no limit).
     * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` (no limit).
     * @param {String} [options.content_type='null'] - Content type of the header sent with the request.
     * @param {String} [options.header_name='null'] - Name of the custom header sent with the request.
     * @param {String} [options.header_value='null'] - Value of the custom header sent with the request.
     * @param {module:model/String} [options.json_format] - Enforces valid JSON formatting for log entries.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {module:model/String} [options.method='POST'] - HTTP method used for request.
     * @param {String} [options.url] - The URL to send logs to. Must use HTTPS. Required.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingHttpsResponse}
     */

  }, {
    key: "createLogHttps",
    value: function createLogHttps() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogHttpsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the HTTPS object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_https_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogHttpsWithHttpInfo",
    value: function deleteLogHttpsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_https_name' is set.


      if (options['logging_https_name'] === undefined || options['logging_https_name'] === null) {
        throw new Error("Missing the required parameter 'logging_https_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_https_name': options['logging_https_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/https/{logging_https_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the HTTPS object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_https_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogHttps",
    value: function deleteLogHttps() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogHttpsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the HTTPS object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_https_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingHttpsResponse} and HTTP response
     */

  }, {
    key: "getLogHttpsWithHttpInfo",
    value: function getLogHttpsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_https_name' is set.


      if (options['logging_https_name'] === undefined || options['logging_https_name'] === null) {
        throw new Error("Missing the required parameter 'logging_https_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_https_name': options['logging_https_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingHttpsResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/https/{logging_https_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the HTTPS object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_https_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingHttpsResponse}
     */

  }, {
    key: "getLogHttps",
    value: function getLogHttps() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogHttpsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the HTTPS objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingHttpsResponse>} and HTTP response
     */

  }, {
    key: "listLogHttpsWithHttpInfo",
    value: function listLogHttpsWithHttpInfo() {
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
      var returnType = [_LoggingHttpsResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/https', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the HTTPS objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingHttpsResponse>}
     */

  }, {
    key: "listLogHttps",
    value: function listLogHttps() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogHttpsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the HTTPS object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_https_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` (no limit).
     * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` (no limit).
     * @param {String} [options.content_type='null'] - Content type of the header sent with the request.
     * @param {String} [options.header_name='null'] - Name of the custom header sent with the request.
     * @param {String} [options.header_value='null'] - Value of the custom header sent with the request.
     * @param {module:model/String} [options.json_format] - Enforces valid JSON formatting for log entries.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {module:model/String} [options.method='POST'] - HTTP method used for request.
     * @param {String} [options.url] - The URL to send logs to. Must use HTTPS. Required.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingHttpsResponse} and HTTP response
     */

  }, {
    key: "updateLogHttpsWithHttpInfo",
    value: function updateLogHttpsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_https_name' is set.


      if (options['logging_https_name'] === undefined || options['logging_https_name'] === null) {
        throw new Error("Missing the required parameter 'logging_https_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_https_name': options['logging_https_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'tls_ca_cert': options['tls_ca_cert'],
        'tls_client_cert': options['tls_client_cert'],
        'tls_client_key': options['tls_client_key'],
        'tls_hostname': options['tls_hostname'],
        'request_max_bytes': options['request_max_bytes'],
        'request_max_entries': options['request_max_entries'],
        'content_type': options['content_type'],
        'header_name': options['header_name'],
        'header_value': options['header_value'],
        'json_format': options['json_format'],
        'message_type': options['message_type'],
        'method': options['method'],
        'url': options['url']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingHttpsResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/https/{logging_https_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the HTTPS object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_https_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` (no limit).
     * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` (no limit).
     * @param {String} [options.content_type='null'] - Content type of the header sent with the request.
     * @param {String} [options.header_name='null'] - Name of the custom header sent with the request.
     * @param {String} [options.header_value='null'] - Value of the custom header sent with the request.
     * @param {module:model/String} [options.json_format] - Enforces valid JSON formatting for log entries.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {module:model/String} [options.method='POST'] - HTTP method used for request.
     * @param {String} [options.url] - The URL to send logs to. Must use HTTPS. Required.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingHttpsResponse}
     */

  }, {
    key: "updateLogHttps",
    value: function updateLogHttps() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogHttpsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingHttpsApi;
}();

exports["default"] = LoggingHttpsApi;