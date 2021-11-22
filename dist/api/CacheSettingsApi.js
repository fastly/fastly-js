"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CacheSettingResponse = _interopRequireDefault(require("../model/CacheSettingResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* CacheSettings service.
* @module api/CacheSettingsApi
* @version 3.0.0-alpha1
*/
var CacheSettingsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CacheSettingsApi. 
  * @alias module:api/CacheSettingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CacheSettingsApi(apiClient) {
    _classCallCheck(this, CacheSettingsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a cache settings object.
   * @param {Object} options
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @param {Number} options.version_id - Integer identifying a service version.
   * @param {module:model/String} [options.action] - If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
   * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
   * @param {String} [options.name] - Name for the cache settings object.
   * @param {Number} [options.stale_ttl] - Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
   * @param {Number} [options.ttl] - Maximum time to consider the object fresh in the cache (the cache 'time to live').
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CacheSettingResponse} and HTTP response
   */


  _createClass(CacheSettingsApi, [{
    key: "createCacheSettingsWithHttpInfo",
    value: function createCacheSettingsWithHttpInfo() {
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
        'action': options['action'],
        'cache_condition': options['cache_condition'],
        'name': options['name'],
        'stale_ttl': options['stale_ttl'],
        'ttl': options['ttl']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _CacheSettingResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/cache_settings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {module:model/String} [options.action] - If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.name] - Name for the cache settings object.
     * @param {Number} [options.stale_ttl] - Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
     * @param {Number} [options.ttl] - Maximum time to consider the object fresh in the cache (the cache 'time to live').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CacheSettingResponse}
     */

  }, {
    key: "createCacheSettings",
    value: function createCacheSettings() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createCacheSettingsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteCacheSettingsWithHttpInfo",
    value: function deleteCacheSettingsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'cache_settings_name' is set.


      if (options['cache_settings_name'] === undefined || options['cache_settings_name'] === null) {
        throw new Error("Missing the required parameter 'cache_settings_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'cache_settings_name': options['cache_settings_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteCacheSettings",
    value: function deleteCacheSettings() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteCacheSettingsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CacheSettingResponse} and HTTP response
     */

  }, {
    key: "getCacheSettingsWithHttpInfo",
    value: function getCacheSettingsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'cache_settings_name' is set.


      if (options['cache_settings_name'] === undefined || options['cache_settings_name'] === null) {
        throw new Error("Missing the required parameter 'cache_settings_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'cache_settings_name': options['cache_settings_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CacheSettingResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CacheSettingResponse}
     */

  }, {
    key: "getCacheSettings",
    value: function getCacheSettings() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getCacheSettingsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a list of all cache settings for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CacheSettingResponse>} and HTTP response
     */

  }, {
    key: "listCacheSettingsWithHttpInfo",
    value: function listCacheSettingsWithHttpInfo() {
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
      var returnType = [_CacheSettingResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/cache_settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of all cache settings for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CacheSettingResponse>}
     */

  }, {
    key: "listCacheSettings",
    value: function listCacheSettings() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listCacheSettingsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @param {module:model/String} [options.action] - If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.name] - Name for the cache settings object.
     * @param {Number} [options.stale_ttl] - Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
     * @param {Number} [options.ttl] - Maximum time to consider the object fresh in the cache (the cache 'time to live').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CacheSettingResponse} and HTTP response
     */

  }, {
    key: "updateCacheSettingsWithHttpInfo",
    value: function updateCacheSettingsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'cache_settings_name' is set.


      if (options['cache_settings_name'] === undefined || options['cache_settings_name'] === null) {
        throw new Error("Missing the required parameter 'cache_settings_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'cache_settings_name': options['cache_settings_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'action': options['action'],
        'cache_condition': options['cache_condition'],
        'name': options['name'],
        'stale_ttl': options['stale_ttl'],
        'ttl': options['ttl']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _CacheSettingResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @param {module:model/String} [options.action] - If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.name] - Name for the cache settings object.
     * @param {Number} [options.stale_ttl] - Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
     * @param {Number} [options.ttl] - Maximum time to consider the object fresh in the cache (the cache 'time to live').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CacheSettingResponse}
     */

  }, {
    key: "updateCacheSettings",
    value: function updateCacheSettings() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateCacheSettingsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CacheSettingsApi;
}();

exports["default"] = CacheSettingsApi;