"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RequestSettingsResponse = _interopRequireDefault(require("../model/RequestSettingsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* RequestSettings service.
* @module api/RequestSettingsApi
* @version 3.0.0-alpha1
*/
var RequestSettingsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RequestSettingsApi. 
  * @alias module:api/RequestSettingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RequestSettingsApi(apiClient) {
    _classCallCheck(this, RequestSettingsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Creates a new Request Settings object.
   * @param {Object} options
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @param {Number} options.version_id - Integer identifying a service version.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RequestSettingsResponse} and HTTP response
   */


  _createClass(RequestSettingsApi, [{
    key: "createRequestSettingsWithHttpInfo",
    value: function createRequestSettingsWithHttpInfo() {
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
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _RequestSettingsResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/request_settings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a new Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RequestSettingsResponse}
     */

  }, {
    key: "createRequestSettings",
    value: function createRequestSettings() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createRequestSettingsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Removes the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteRequestSettingsWithHttpInfo",
    value: function deleteRequestSettingsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'request_settings_name' is set.


      if (options['request_settings_name'] === undefined || options['request_settings_name'] === null) {
        throw new Error("Missing the required parameter 'request_settings_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'request_settings_name': options['request_settings_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/request_settings/{request_settings_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Removes the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteRequestSettings",
    value: function deleteRequestSettings() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteRequestSettingsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RequestSettingsResponse} and HTTP response
     */

  }, {
    key: "getRequestSettingsWithHttpInfo",
    value: function getRequestSettingsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'request_settings_name' is set.


      if (options['request_settings_name'] === undefined || options['request_settings_name'] === null) {
        throw new Error("Missing the required parameter 'request_settings_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'request_settings_name': options['request_settings_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RequestSettingsResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/request_settings/{request_settings_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RequestSettingsResponse}
     */

  }, {
    key: "getRequestSettings",
    value: function getRequestSettings() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getRequestSettingsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns a list of all Request Settings objects for the given service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/RequestSettingsResponse>} and HTTP response
     */

  }, {
    key: "listRequestSettingsWithHttpInfo",
    value: function listRequestSettingsWithHttpInfo() {
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
      var returnType = [_RequestSettingsResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/request_settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns a list of all Request Settings objects for the given service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/RequestSettingsResponse>}
     */

  }, {
    key: "listRequestSettings",
    value: function listRequestSettings() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listRequestSettingsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Updates the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @param {module:model/String} [options.action] - Allows you to terminate request handling and immediately perform an action.
     * @param {Number} [options.bypass_busy_wait] - Disable collapsed forwarding, so you don't wait for other objects to origin.
     * @param {String} [options.default_host] - Sets the host header.
     * @param {Number} [options.force_miss] - Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
     * @param {Number} [options.force_ssl] - Forces the request use SSL (redirects a non-SSL to SSL).
     * @param {Number} [options.geo_headers] - Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
     * @param {String} [options.hash_keys] - Comma separated list of varnish request object fields that should be in the hash key.
     * @param {Number} [options.max_stale_age] - How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
     * @param {String} [options.name] - Name for the request settings.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {Number} [options.timer_support] - Injects the X-Timer info into the request for viewing origin fetch durations.
     * @param {module:model/String} [options.xff] - Short for X-Forwarded-For.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RequestSettingsResponse} and HTTP response
     */

  }, {
    key: "updateRequestSettingsWithHttpInfo",
    value: function updateRequestSettingsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'request_settings_name' is set.


      if (options['request_settings_name'] === undefined || options['request_settings_name'] === null) {
        throw new Error("Missing the required parameter 'request_settings_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'request_settings_name': options['request_settings_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'action': options['action'],
        'bypass_busy_wait': options['bypass_busy_wait'],
        'default_host': options['default_host'],
        'force_miss': options['force_miss'],
        'force_ssl': options['force_ssl'],
        'geo_headers': options['geo_headers'],
        'hash_keys': options['hash_keys'],
        'max_stale_age': options['max_stale_age'],
        'name': options['name'],
        'request_condition': options['request_condition'],
        'timer_support': options['timer_support'],
        'xff': options['xff']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _RequestSettingsResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/request_settings/{request_settings_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Updates the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @param {module:model/String} [options.action] - Allows you to terminate request handling and immediately perform an action.
     * @param {Number} [options.bypass_busy_wait] - Disable collapsed forwarding, so you don't wait for other objects to origin.
     * @param {String} [options.default_host] - Sets the host header.
     * @param {Number} [options.force_miss] - Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
     * @param {Number} [options.force_ssl] - Forces the request use SSL (redirects a non-SSL to SSL).
     * @param {Number} [options.geo_headers] - Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
     * @param {String} [options.hash_keys] - Comma separated list of varnish request object fields that should be in the hash key.
     * @param {Number} [options.max_stale_age] - How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
     * @param {String} [options.name] - Name for the request settings.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {Number} [options.timer_support] - Injects the X-Timer info into the request for viewing origin fetch durations.
     * @param {module:model/String} [options.xff] - Short for X-Forwarded-For.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RequestSettingsResponse}
     */

  }, {
    key: "updateRequestSettings",
    value: function updateRequestSettings() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateRequestSettingsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return RequestSettingsApi;
}();

exports["default"] = RequestSettingsApi;