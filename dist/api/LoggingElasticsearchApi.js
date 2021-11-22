"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingElasticsearchResponse = _interopRequireDefault(require("../model/LoggingElasticsearchResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingElasticsearch service.
* @module api/LoggingElasticsearchApi
* @version 3.0.0-alpha1
*/
var LoggingElasticsearchApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingElasticsearchApi. 
  * @alias module:api/LoggingElasticsearchApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingElasticsearchApi(apiClient) {
    _classCallCheck(this, LoggingElasticsearchApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a Elasticsearch logging endpoint for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @param {Number} options.version_id - Integer identifying a service version.
   * @param {String} [options.name] - The name for the real-time logging configuration.
   * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
   * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
   * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
   * @param {Object} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
   * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
   * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
   * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
   * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
   * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` for unbounded.
   * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` for unbounded.
   * @param {String} [options.index] - The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
   * @param {String} [options.url] - The URL to stream logs to. Must use HTTPS.
   * @param {String} [options.pipeline] - The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
   * @param {String} [options.user] - Basic Auth username.
   * @param {String} [options.password] - Basic Auth password.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingElasticsearchResponse} and HTTP response
   */


  _createClass(LoggingElasticsearchApi, [{
    key: "createLogElasticsearchWithHttpInfo",
    value: function createLogElasticsearchWithHttpInfo() {
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
        'index': options['index'],
        'url': options['url'],
        'pipeline': options['pipeline'],
        'user': options['user'],
        'password': options['password']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingElasticsearchResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/elasticsearch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Elasticsearch logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {Object} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` for unbounded.
     * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` for unbounded.
     * @param {String} [options.index] - The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
     * @param {String} [options.url] - The URL to stream logs to. Must use HTTPS.
     * @param {String} [options.pipeline] - The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
     * @param {String} [options.user] - Basic Auth username.
     * @param {String} [options.password] - Basic Auth password.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingElasticsearchResponse}
     */

  }, {
    key: "createLogElasticsearch",
    value: function createLogElasticsearch() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogElasticsearchWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the Elasticsearch logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_elasticsearch_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogElasticsearchWithHttpInfo",
    value: function deleteLogElasticsearchWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_elasticsearch_name' is set.


      if (options['logging_elasticsearch_name'] === undefined || options['logging_elasticsearch_name'] === null) {
        throw new Error("Missing the required parameter 'logging_elasticsearch_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_elasticsearch_name': options['logging_elasticsearch_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the Elasticsearch logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_elasticsearch_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogElasticsearch",
    value: function deleteLogElasticsearch() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogElasticsearchWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the Elasticsearch logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_elasticsearch_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingElasticsearchResponse} and HTTP response
     */

  }, {
    key: "getLogElasticsearchWithHttpInfo",
    value: function getLogElasticsearchWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_elasticsearch_name' is set.


      if (options['logging_elasticsearch_name'] === undefined || options['logging_elasticsearch_name'] === null) {
        throw new Error("Missing the required parameter 'logging_elasticsearch_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_elasticsearch_name': options['logging_elasticsearch_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingElasticsearchResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the Elasticsearch logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_elasticsearch_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingElasticsearchResponse}
     */

  }, {
    key: "getLogElasticsearch",
    value: function getLogElasticsearch() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogElasticsearchWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the Elasticsearch logging endpoints for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingElasticsearchResponse>} and HTTP response
     */

  }, {
    key: "listLogElasticsearchWithHttpInfo",
    value: function listLogElasticsearchWithHttpInfo() {
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
      var returnType = [_LoggingElasticsearchResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/elasticsearch', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the Elasticsearch logging endpoints for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingElasticsearchResponse>}
     */

  }, {
    key: "listLogElasticsearch",
    value: function listLogElasticsearch() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogElasticsearchWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the Elasticsearch logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_elasticsearch_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {Object} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` for unbounded.
     * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` for unbounded.
     * @param {String} [options.index] - The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
     * @param {String} [options.url] - The URL to stream logs to. Must use HTTPS.
     * @param {String} [options.pipeline] - The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
     * @param {String} [options.user] - Basic Auth username.
     * @param {String} [options.password] - Basic Auth password.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingElasticsearchResponse} and HTTP response
     */

  }, {
    key: "updateLogElasticsearchWithHttpInfo",
    value: function updateLogElasticsearchWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_elasticsearch_name' is set.


      if (options['logging_elasticsearch_name'] === undefined || options['logging_elasticsearch_name'] === null) {
        throw new Error("Missing the required parameter 'logging_elasticsearch_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_elasticsearch_name': options['logging_elasticsearch_name']
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
        'index': options['index'],
        'url': options['url'],
        'pipeline': options['pipeline'],
        'user': options['user'],
        'password': options['password']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingElasticsearchResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the Elasticsearch logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_elasticsearch_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {Object} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @param {Number} [options.request_max_entries=0] - The maximum number of logs sent in one request. Defaults `0` for unbounded.
     * @param {Number} [options.request_max_bytes=0] - The maximum number of bytes sent in one request. Defaults `0` for unbounded.
     * @param {String} [options.index] - The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
     * @param {String} [options.url] - The URL to stream logs to. Must use HTTPS.
     * @param {String} [options.pipeline] - The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
     * @param {String} [options.user] - Basic Auth username.
     * @param {String} [options.password] - Basic Auth password.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingElasticsearchResponse}
     */

  }, {
    key: "updateLogElasticsearch",
    value: function updateLogElasticsearch() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogElasticsearchWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingElasticsearchApi;
}();

exports["default"] = LoggingElasticsearchApi;