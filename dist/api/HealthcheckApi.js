"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HealthcheckResponse = _interopRequireDefault(require("../model/HealthcheckResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Healthcheck service.
* @module api/HealthcheckApi
* @version 3.0.0-alpha1
*/
var HealthcheckApi = /*#__PURE__*/function () {
  /**
  * Constructs a new HealthcheckApi. 
  * @alias module:api/HealthcheckApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function HealthcheckApi(apiClient) {
    _classCallCheck(this, HealthcheckApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a healthcheck for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @param {Number} options.version_id - Integer identifying a service version.
   * @param {Number} [options.check_interval] - How often to run the healthcheck in milliseconds.
   * @param {String} [options.comment] - A freeform descriptive note.
   * @param {Number} [options.expected_response] - The status code expected from the host.
   * @param {String} [options.host] - Which host to check.
   * @param {String} [options.http_version] - Whether to use version 1.0 or 1.1 HTTP.
   * @param {Number} [options.initial] - When loading a config, the initial number of probes to be seen as OK.
   * @param {String} [options.method] - Which HTTP method to use.
   * @param {String} [options.name] - The name of the healthcheck.
   * @param {String} [options.path] - The path to check.
   * @param {Number} [options.threshold] - How many healthchecks must succeed to be considered healthy.
   * @param {Number} [options.timeout] - Timeout in milliseconds.
   * @param {Number} [options.window] - The number of most recent healthcheck queries to keep for this healthcheck.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HealthcheckResponse} and HTTP response
   */


  _createClass(HealthcheckApi, [{
    key: "createHealthcheckWithHttpInfo",
    value: function createHealthcheckWithHttpInfo() {
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
        'check_interval': options['check_interval'],
        'comment': options['comment'],
        'expected_response': options['expected_response'],
        'host': options['host'],
        'http_version': options['http_version'],
        'initial': options['initial'],
        'method': options['method'],
        'name': options['name'],
        'path': options['path'],
        'threshold': options['threshold'],
        'timeout': options['timeout'],
        'window': options['window']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _HealthcheckResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/healthcheck', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a healthcheck for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {Number} [options.check_interval] - How often to run the healthcheck in milliseconds.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.expected_response] - The status code expected from the host.
     * @param {String} [options.host] - Which host to check.
     * @param {String} [options.http_version] - Whether to use version 1.0 or 1.1 HTTP.
     * @param {Number} [options.initial] - When loading a config, the initial number of probes to be seen as OK.
     * @param {String} [options.method] - Which HTTP method to use.
     * @param {String} [options.name] - The name of the healthcheck.
     * @param {String} [options.path] - The path to check.
     * @param {Number} [options.threshold] - How many healthchecks must succeed to be considered healthy.
     * @param {Number} [options.timeout] - Timeout in milliseconds.
     * @param {Number} [options.window] - The number of most recent healthcheck queries to keep for this healthcheck.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HealthcheckResponse}
     */

  }, {
    key: "createHealthcheck",
    value: function createHealthcheck() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createHealthcheckWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the healthcheck for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the healthcheck.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteHealthcheckWithHttpInfo",
    value: function deleteHealthcheckWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'healthcheck_name' is set.


      if (options['healthcheck_name'] === undefined || options['healthcheck_name'] === null) {
        throw new Error("Missing the required parameter 'healthcheck_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'healthcheck_name': options['healthcheck_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the healthcheck for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the healthcheck.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteHealthcheck",
    value: function deleteHealthcheck() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteHealthcheckWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the healthcheck for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the healthcheck.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HealthcheckResponse} and HTTP response
     */

  }, {
    key: "getHealthcheckWithHttpInfo",
    value: function getHealthcheckWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'healthcheck_name' is set.


      if (options['healthcheck_name'] === undefined || options['healthcheck_name'] === null) {
        throw new Error("Missing the required parameter 'healthcheck_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'healthcheck_name': options['healthcheck_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _HealthcheckResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the healthcheck for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the healthcheck.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HealthcheckResponse}
     */

  }, {
    key: "getHealthcheck",
    value: function getHealthcheck() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getHealthcheckWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the healthchecks for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/HealthcheckResponse>} and HTTP response
     */

  }, {
    key: "listHealthchecksWithHttpInfo",
    value: function listHealthchecksWithHttpInfo() {
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
      var returnType = [_HealthcheckResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/healthcheck', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the healthchecks for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/HealthcheckResponse>}
     */

  }, {
    key: "listHealthchecks",
    value: function listHealthchecks() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listHealthchecksWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the healthcheck for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the healthcheck.
     * @param {Number} [options.check_interval] - How often to run the healthcheck in milliseconds.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.expected_response] - The status code expected from the host.
     * @param {String} [options.host] - Which host to check.
     * @param {String} [options.http_version] - Whether to use version 1.0 or 1.1 HTTP.
     * @param {Number} [options.initial] - When loading a config, the initial number of probes to be seen as OK.
     * @param {String} [options.method] - Which HTTP method to use.
     * @param {String} [options.name] - The name of the healthcheck.
     * @param {String} [options.path] - The path to check.
     * @param {Number} [options.threshold] - How many healthchecks must succeed to be considered healthy.
     * @param {Number} [options.timeout] - Timeout in milliseconds.
     * @param {Number} [options.window] - The number of most recent healthcheck queries to keep for this healthcheck.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HealthcheckResponse} and HTTP response
     */

  }, {
    key: "updateHealthcheckWithHttpInfo",
    value: function updateHealthcheckWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'healthcheck_name' is set.


      if (options['healthcheck_name'] === undefined || options['healthcheck_name'] === null) {
        throw new Error("Missing the required parameter 'healthcheck_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'healthcheck_name': options['healthcheck_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'check_interval': options['check_interval'],
        'comment': options['comment'],
        'expected_response': options['expected_response'],
        'host': options['host'],
        'http_version': options['http_version'],
        'initial': options['initial'],
        'method': options['method'],
        'name': options['name'],
        'path': options['path'],
        'threshold': options['threshold'],
        'timeout': options['timeout'],
        'window': options['window']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _HealthcheckResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the healthcheck for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the healthcheck.
     * @param {Number} [options.check_interval] - How often to run the healthcheck in milliseconds.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.expected_response] - The status code expected from the host.
     * @param {String} [options.host] - Which host to check.
     * @param {String} [options.http_version] - Whether to use version 1.0 or 1.1 HTTP.
     * @param {Number} [options.initial] - When loading a config, the initial number of probes to be seen as OK.
     * @param {String} [options.method] - Which HTTP method to use.
     * @param {String} [options.name] - The name of the healthcheck.
     * @param {String} [options.path] - The path to check.
     * @param {Number} [options.threshold] - How many healthchecks must succeed to be considered healthy.
     * @param {Number} [options.timeout] - Timeout in milliseconds.
     * @param {Number} [options.window] - The number of most recent healthcheck queries to keep for this healthcheck.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HealthcheckResponse}
     */

  }, {
    key: "updateHealthcheck",
    value: function updateHealthcheck() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateHealthcheckWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return HealthcheckApi;
}();

exports["default"] = HealthcheckApi;