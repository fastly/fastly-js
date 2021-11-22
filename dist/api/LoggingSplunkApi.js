"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingSplunkResponse = _interopRequireDefault(require("../model/LoggingSplunkResponse"));

var _LoggingUseTls = _interopRequireDefault(require("../model/LoggingUseTls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingSplunk service.
* @module api/LoggingSplunkApi
* @version 3.0.0-alpha1
*/
var LoggingSplunkApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingSplunkApi. 
  * @alias module:api/LoggingSplunkApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingSplunkApi(apiClient) {
    _classCallCheck(this, LoggingSplunkApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a Splunk logging object for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @param {Number} options.version_id - Integer identifying a service version.
   * @param {String} [options.name] - The name for the real-time logging configuration.
   * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
   * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
   * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
   * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
   * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
   * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
   * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
   * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
   * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` for unbounded.
   * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` for unbounded.
   * @param {String} [options.url] - The URL to post logs to.
   * @param {String} [options.token] - A Splunk token for use in posting logs over HTTP to your collector.
   * @param {module:model/LoggingUseTls} [options.use_tls]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingSplunkResponse} and HTTP response
   */


  _createClass(LoggingSplunkApi, [{
    key: "createLogSplunkWithHttpInfo",
    value: function createLogSplunkWithHttpInfo() {
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
        'name': options['name'],
        'placement': options['placement'],
        'format_version': options['format_version'],
        'response_condition': options['response_condition'],
        'format': options['format'],
        'tls_ca_cert': options['tls_ca_cert'],
        'tls_client_cert': options['tls_client_cert'],
        'tls_client_key': options['tls_client_key'],
        'tls_hostname': options['tls_hostname'],
        'request_max_entries': options['request_max_entries'],
        'request_max_bytes': options['request_max_bytes'],
        'url': options['url'],
        'token': options['token'],
        'use_tls': options['use_tls']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingSplunkResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/splunk', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Splunk logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` for unbounded.
     * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` for unbounded.
     * @param {String} [options.url] - The URL to post logs to.
     * @param {String} [options.token] - A Splunk token for use in posting logs over HTTP to your collector.
     * @param {module:model/LoggingUseTls} [options.use_tls]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingSplunkResponse}
     */

  }, {
    key: "createLogSplunk",
    value: function createLogSplunk() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogSplunkWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the Splunk logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_splunk_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogSplunkWithHttpInfo",
    value: function deleteLogSplunkWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_splunk_name' is set.


      if (options['logging_splunk_name'] === undefined || options['logging_splunk_name'] === null) {
        throw new Error("Missing the required parameter 'logging_splunk_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_splunk_name': options['logging_splunk_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the Splunk logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_splunk_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogSplunk",
    value: function deleteLogSplunk() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogSplunkWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the details for a Splunk logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_splunk_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingSplunkResponse} and HTTP response
     */

  }, {
    key: "getLogSplunkWithHttpInfo",
    value: function getLogSplunkWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_splunk_name' is set.


      if (options['logging_splunk_name'] === undefined || options['logging_splunk_name'] === null) {
        throw new Error("Missing the required parameter 'logging_splunk_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_splunk_name': options['logging_splunk_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingSplunkResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the details for a Splunk logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_splunk_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingSplunkResponse}
     */

  }, {
    key: "getLogSplunk",
    value: function getLogSplunk() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogSplunkWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the Splunk logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingSplunkResponse>} and HTTP response
     */

  }, {
    key: "listLogSplunkWithHttpInfo",
    value: function listLogSplunkWithHttpInfo() {
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
      var returnType = [_LoggingSplunkResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/splunk', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the Splunk logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingSplunkResponse>}
     */

  }, {
    key: "listLogSplunk",
    value: function listLogSplunk() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogSplunkWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the Splunk logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_splunk_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` for unbounded.
     * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` for unbounded.
     * @param {String} [options.url] - The URL to post logs to.
     * @param {String} [options.token] - A Splunk token for use in posting logs over HTTP to your collector.
     * @param {module:model/LoggingUseTls} [options.use_tls]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingSplunkResponse} and HTTP response
     */

  }, {
    key: "updateLogSplunkWithHttpInfo",
    value: function updateLogSplunkWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_splunk_name' is set.


      if (options['logging_splunk_name'] === undefined || options['logging_splunk_name'] === null) {
        throw new Error("Missing the required parameter 'logging_splunk_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_splunk_name': options['logging_splunk_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'name': options['name'],
        'placement': options['placement'],
        'format_version': options['format_version'],
        'response_condition': options['response_condition'],
        'format': options['format'],
        'tls_ca_cert': options['tls_ca_cert'],
        'tls_client_cert': options['tls_client_cert'],
        'tls_client_key': options['tls_client_key'],
        'tls_hostname': options['tls_hostname'],
        'request_max_entries': options['request_max_entries'],
        'request_max_bytes': options['request_max_bytes'],
        'url': options['url'],
        'token': options['token'],
        'use_tls': options['use_tls']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingSplunkResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the Splunk logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_splunk_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` for unbounded.
     * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` for unbounded.
     * @param {String} [options.url] - The URL to post logs to.
     * @param {String} [options.token] - A Splunk token for use in posting logs over HTTP to your collector.
     * @param {module:model/LoggingUseTls} [options.use_tls]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingSplunkResponse}
     */

  }, {
    key: "updateLogSplunk",
    value: function updateLogSplunk() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogSplunkWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingSplunkApi;
}();

exports["default"] = LoggingSplunkApi;