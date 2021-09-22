"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingBigqueryResponse = _interopRequireDefault(require("../model/LoggingBigqueryResponse"));

var _LoggingFormatVersion = _interopRequireDefault(require("../model/LoggingFormatVersion"));

var _LoggingPlacement = _interopRequireDefault(require("../model/LoggingPlacement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingBigquery service.
* @module api/LoggingBigqueryApi
* @version 3.0.0-alpha1
*/
var LoggingBigqueryApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingBigqueryApi. 
  * @alias module:api/LoggingBigqueryApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingBigqueryApi(apiClient) {
    _classCallCheck(this, LoggingBigqueryApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a BigQuery logging object for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
   * @param {module:model/LoggingFormatVersion} [options.format_version]
   * @param {String} [options.name] - The name of the BigQuery logging object. Used as a primary key for API access.
   * @param {module:model/LoggingPlacement} [options.placement]
   * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
   * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
   * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
   * @param {String} [options.dataset] - Your BigQuery dataset.
   * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
   * @param {String} [options.table] - Your BigQuery table.
   * @param {String} [options.template_suffix] - BigQuery table name suffix template. Optional.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingBigqueryResponse} and HTTP response
   */


  _createClass(LoggingBigqueryApi, [{
    key: "createLogBigqueryWithHttpInfo",
    value: function createLogBigqueryWithHttpInfo() {
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
        'secret_key': options['secret_key'],
        'user': options['user'],
        'dataset': options['dataset'],
        'project_id': options['project_id'],
        'table': options['table'],
        'template_suffix': options['template_suffix']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingBigqueryResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/bigquery', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a BigQuery logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name of the BigQuery logging object. Used as a primary key for API access.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
     * @param {String} [options.dataset] - Your BigQuery dataset.
     * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
     * @param {String} [options.table] - Your BigQuery table.
     * @param {String} [options.template_suffix] - BigQuery table name suffix template. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingBigqueryResponse}
     */

  }, {
    key: "createLogBigquery",
    value: function createLogBigquery() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogBigqueryWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a BigQuery logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_bigquery_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogBigqueryWithHttpInfo",
    value: function deleteLogBigqueryWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_bigquery_name' is set.


      if (options['logging_bigquery_name'] === undefined || options['logging_bigquery_name'] === null) {
        throw new Error("Missing the required parameter 'logging_bigquery_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_bigquery_name': options['logging_bigquery_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a BigQuery logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_bigquery_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogBigquery",
    value: function deleteLogBigquery() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogBigqueryWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the details for a BigQuery logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_bigquery_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingBigqueryResponse} and HTTP response
     */

  }, {
    key: "getLogBigqueryWithHttpInfo",
    value: function getLogBigqueryWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_bigquery_name' is set.


      if (options['logging_bigquery_name'] === undefined || options['logging_bigquery_name'] === null) {
        throw new Error("Missing the required parameter 'logging_bigquery_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_bigquery_name': options['logging_bigquery_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingBigqueryResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the details for a BigQuery logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_bigquery_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingBigqueryResponse}
     */

  }, {
    key: "getLogBigquery",
    value: function getLogBigquery() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogBigqueryWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the BigQuery logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingBigqueryResponse>} and HTTP response
     */

  }, {
    key: "listLogBigqueryWithHttpInfo",
    value: function listLogBigqueryWithHttpInfo() {
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
      var returnType = [_LoggingBigqueryResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/bigquery', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the BigQuery logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingBigqueryResponse>}
     */

  }, {
    key: "listLogBigquery",
    value: function listLogBigquery() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogBigqueryWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a BigQuery logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_bigquery_name
     * @param {String} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name of the BigQuery logging object. Used as a primary key for API access.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
     * @param {String} [options.dataset] - Your BigQuery dataset.
     * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
     * @param {String} [options.table] - Your BigQuery table.
     * @param {String} [options.template_suffix] - BigQuery table name suffix template. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingBigqueryResponse} and HTTP response
     */

  }, {
    key: "updateLogBigqueryWithHttpInfo",
    value: function updateLogBigqueryWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_bigquery_name' is set.


      if (options['logging_bigquery_name'] === undefined || options['logging_bigquery_name'] === null) {
        throw new Error("Missing the required parameter 'logging_bigquery_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_bigquery_name': options['logging_bigquery_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'secret_key': options['secret_key'],
        'user': options['user'],
        'dataset': options['dataset'],
        'project_id': options['project_id'],
        'table': options['table'],
        'template_suffix': options['template_suffix']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingBigqueryResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a BigQuery logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_bigquery_name
     * @param {String} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name of the BigQuery logging object. Used as a primary key for API access.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
     * @param {String} [options.dataset] - Your BigQuery dataset.
     * @param {String} [options.project_id] - Your Google Cloud Platform project ID. Required
     * @param {String} [options.table] - Your BigQuery table.
     * @param {String} [options.template_suffix] - BigQuery table name suffix template. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingBigqueryResponse}
     */

  }, {
    key: "updateLogBigquery",
    value: function updateLogBigquery() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogBigqueryWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingBigqueryApi;
}();

exports["default"] = LoggingBigqueryApi;