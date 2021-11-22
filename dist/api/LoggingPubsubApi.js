"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingGooglePubsubResponse = _interopRequireDefault(require("../model/LoggingGooglePubsubResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingPubsub service.
* @module api/LoggingPubsubApi
* @version 3.0.0-alpha1
*/
var LoggingPubsubApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingPubsubApi. 
  * @alias module:api/LoggingPubsubApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingPubsubApi(apiClient) {
    _classCallCheck(this, LoggingPubsubApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a Pub/Sub logging object for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @param {Number} options.version_id - Integer identifying a service version.
   * @param {String} [options.name] - The name for the real-time logging configuration.
   * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
   * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
   * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
   * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
   * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
   * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
   * @param {String} [options.topic] - The Google Cloud Pub/Sub topic to which logs will be published. Required.
   * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingGooglePubsubResponse} and HTTP response
   */


  _createClass(LoggingPubsubApi, [{
    key: "createLogGcpPubsubWithHttpInfo",
    value: function createLogGcpPubsubWithHttpInfo() {
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
        'user': options['user'],
        'secret_key': options['secret_key'],
        'topic': options['topic'],
        'project_id': options['project_id']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingGooglePubsubResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/pubsub', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
     * @param {String} [options.topic] - The Google Cloud Pub/Sub topic to which logs will be published. Required.
     * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingGooglePubsubResponse}
     */

  }, {
    key: "createLogGcpPubsub",
    value: function createLogGcpPubsub() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogGcpPubsubWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogGcpPubsubWithHttpInfo",
    value: function deleteLogGcpPubsubWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_google_pubsub_name' is set.


      if (options['logging_google_pubsub_name'] === undefined || options['logging_google_pubsub_name'] === null) {
        throw new Error("Missing the required parameter 'logging_google_pubsub_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_google_pubsub_name': options['logging_google_pubsub_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogGcpPubsub",
    value: function deleteLogGcpPubsub() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogGcpPubsubWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the details for a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingGooglePubsubResponse} and HTTP response
     */

  }, {
    key: "getLogGcpPubsubWithHttpInfo",
    value: function getLogGcpPubsubWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_google_pubsub_name' is set.


      if (options['logging_google_pubsub_name'] === undefined || options['logging_google_pubsub_name'] === null) {
        throw new Error("Missing the required parameter 'logging_google_pubsub_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_google_pubsub_name': options['logging_google_pubsub_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingGooglePubsubResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the details for a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingGooglePubsubResponse}
     */

  }, {
    key: "getLogGcpPubsub",
    value: function getLogGcpPubsub() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogGcpPubsubWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the Pub/Sub logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingGooglePubsubResponse>} and HTTP response
     */

  }, {
    key: "listLogGcpPubsubWithHttpInfo",
    value: function listLogGcpPubsubWithHttpInfo() {
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
      var returnType = [_LoggingGooglePubsubResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/pubsub', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the Pub/Sub logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingGooglePubsubResponse>}
     */

  }, {
    key: "listLogGcpPubsub",
    value: function listLogGcpPubsub() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogGcpPubsubWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
     * @param {String} [options.topic] - The Google Cloud Pub/Sub topic to which logs will be published. Required.
     * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingGooglePubsubResponse} and HTTP response
     */

  }, {
    key: "updateLogGcpPubsubWithHttpInfo",
    value: function updateLogGcpPubsubWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_google_pubsub_name' is set.


      if (options['logging_google_pubsub_name'] === undefined || options['logging_google_pubsub_name'] === null) {
        throw new Error("Missing the required parameter 'logging_google_pubsub_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_google_pubsub_name': options['logging_google_pubsub_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'name': options['name'],
        'placement': options['placement'],
        'format_version': options['format_version'],
        'response_condition': options['response_condition'],
        'format': options['format'],
        'user': options['user'],
        'secret_key': options['secret_key'],
        'topic': options['topic'],
        'project_id': options['project_id']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingGooglePubsubResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Pub/Sub logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_google_pubsub_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
     * @param {String} [options.topic] - The Google Cloud Pub/Sub topic to which logs will be published. Required.
     * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingGooglePubsubResponse}
     */

  }, {
    key: "updateLogGcpPubsub",
    value: function updateLogGcpPubsub() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogGcpPubsubWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingPubsubApi;
}();

exports["default"] = LoggingPubsubApi;