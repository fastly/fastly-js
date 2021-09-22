"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GzipResponse = _interopRequireDefault(require("../model/GzipResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Gzip service.
* @module api/GzipApi
* @version 3.0.0-alpha1
*/
var GzipApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GzipApi. 
  * @alias module:api/GzipApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GzipApi(apiClient) {
    _classCallCheck(this, GzipApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a named gzip configuration on a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
   * @param {String} [options.content_types] - Space-separated list of content types to compress. If you omit this field a default list will be used.
   * @param {String} [options.extensions] - Space-separated list of file extensions to compress. If you omit this field a default list will be used.
   * @param {String} [options.name] - Name of the gzip configuration.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GzipResponse} and HTTP response
   */


  _createClass(GzipApi, [{
    key: "createGzipConfigWithHttpInfo",
    value: function createGzipConfigWithHttpInfo() {
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
        'cache_condition': options['cache_condition'],
        'content_types': options['content_types'],
        'extensions': options['extensions'],
        'name': options['name']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _GzipResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/gzip', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a named gzip configuration on a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.content_types] - Space-separated list of content types to compress. If you omit this field a default list will be used.
     * @param {String} [options.extensions] - Space-separated list of file extensions to compress. If you omit this field a default list will be used.
     * @param {String} [options.name] - Name of the gzip configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GzipResponse}
     */

  }, {
    key: "createGzipConfig",
    value: function createGzipConfig() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createGzipConfigWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a named gzip configuration on a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.gzip_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteGzipConfigWithHttpInfo",
    value: function deleteGzipConfigWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'gzip_name' is set.


      if (options['gzip_name'] === undefined || options['gzip_name'] === null) {
        throw new Error("Missing the required parameter 'gzip_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'gzip_name': options['gzip_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/gzip/{gzip_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a named gzip configuration on a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.gzip_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteGzipConfig",
    value: function deleteGzipConfig() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteGzipConfigWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the gzip configuration for a particular service, version, and name.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.gzip_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GzipResponse} and HTTP response
     */

  }, {
    key: "getGzipConfigsWithHttpInfo",
    value: function getGzipConfigsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'gzip_name' is set.


      if (options['gzip_name'] === undefined || options['gzip_name'] === null) {
        throw new Error("Missing the required parameter 'gzip_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'gzip_name': options['gzip_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GzipResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/gzip/{gzip_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the gzip configuration for a particular service, version, and name.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.gzip_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GzipResponse}
     */

  }, {
    key: "getGzipConfigs",
    value: function getGzipConfigs() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getGzipConfigsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all gzip configurations for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GzipResponse>} and HTTP response
     */

  }, {
    key: "listGzipConfigsWithHttpInfo",
    value: function listGzipConfigsWithHttpInfo() {
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
      var returnType = [_GzipResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/gzip', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all gzip configurations for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GzipResponse>}
     */

  }, {
    key: "listGzipConfigs",
    value: function listGzipConfigs() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listGzipConfigsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a named gzip configuration on a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.gzip_name
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.content_types] - Space-separated list of content types to compress. If you omit this field a default list will be used.
     * @param {String} [options.extensions] - Space-separated list of file extensions to compress. If you omit this field a default list will be used.
     * @param {String} [options.name] - Name of the gzip configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GzipResponse} and HTTP response
     */

  }, {
    key: "updateGzipConfigWithHttpInfo",
    value: function updateGzipConfigWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'gzip_name' is set.


      if (options['gzip_name'] === undefined || options['gzip_name'] === null) {
        throw new Error("Missing the required parameter 'gzip_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'gzip_name': options['gzip_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'cache_condition': options['cache_condition'],
        'content_types': options['content_types'],
        'extensions': options['extensions'],
        'name': options['name']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _GzipResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/gzip/{gzip_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a named gzip configuration on a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.gzip_name
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.content_types] - Space-separated list of content types to compress. If you omit this field a default list will be used.
     * @param {String} [options.extensions] - Space-separated list of file extensions to compress. If you omit this field a default list will be used.
     * @param {String} [options.name] - Name of the gzip configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GzipResponse}
     */

  }, {
    key: "updateGzipConfig",
    value: function updateGzipConfig() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateGzipConfigWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return GzipApi;
}();

exports["default"] = GzipApi;