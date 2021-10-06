"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WafFirewallVersion = _interopRequireDefault(require("../model/WafFirewallVersion"));

var _WafFirewallVersionResponse = _interopRequireDefault(require("../model/WafFirewallVersionResponse"));

var _WafFirewallVersionsResponse = _interopRequireDefault(require("../model/WafFirewallVersionsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WafFirewallVersions service.
* @module api/WafFirewallVersionsApi
* @version 3.0.0-alpha1
*/
var WafFirewallVersionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WafFirewallVersionsApi. 
  * @alias module:api/WafFirewallVersionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WafFirewallVersionsApi(apiClient) {
    _classCallCheck(this, WafFirewallVersionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Clone a specific, existing firewall version into a new, draft firewall version.
   * @param {Object} options
   * @param {String} options.firewall_id
   * @param {Number} options.firewall_version_number
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallVersionResponse} and HTTP response
   */


  _createClass(WafFirewallVersionsApi, [{
    key: "cloneWafFirewallVersionWithHttpInfo",
    value: function cloneWafFirewallVersionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'firewall_version_number' is set.


      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafFirewallVersionResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/clone', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Clone a specific, existing firewall version into a new, draft firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallVersionResponse}
     */

  }, {
    key: "cloneWafFirewallVersion",
    value: function cloneWafFirewallVersion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.cloneWafFirewallVersionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a new, draft firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {module:model/WafFirewallVersion} [options.waf_firewall_version]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallVersionResponse} and HTTP response
     */

  }, {
    key: "createWafFirewallVersionWithHttpInfo",
    value: function createWafFirewallVersionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['waf_firewall_version']; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafFirewallVersionResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a new, draft firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {module:model/WafFirewallVersion} [options.waf_firewall_version]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallVersionResponse}
     */

  }, {
    key: "createWafFirewallVersion",
    value: function createWafFirewallVersion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createWafFirewallVersionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deploy or activate a specific firewall version. If a firewall has been disabled, deploying a firewall version will automatically enable the firewall again.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deployActivateWafFirewallVersionWithHttpInfo",
    value: function deployActivateWafFirewallVersionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'firewall_version_number' is set.


      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = Object;
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/activate', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deploy or activate a specific firewall version. If a firewall has been disabled, deploying a firewall version will automatically enable the firewall again.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deployActivateWafFirewallVersion",
    value: function deployActivateWafFirewallVersion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deployActivateWafFirewallVersionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get details about a specific firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_firewall` and `waf_active_rules`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallVersionResponse} and HTTP response
     */

  }, {
    key: "getWafFirewallVersionWithHttpInfo",
    value: function getWafFirewallVersionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'firewall_version_number' is set.


      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number']
      };
      var queryParams = {
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafFirewallVersionResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{firewall_version_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get details about a specific firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_firewall` and `waf_active_rules`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallVersionResponse}
     */

  }, {
    key: "getWafFirewallVersion",
    value: function getWafFirewallVersion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getWafFirewallVersionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a list of firewall versions associated with a specific firewall.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {String} [options.include] - Include relationships. Optional.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallVersionsResponse} and HTTP response
     */

  }, {
    key: "listWafFirewallVersionsWithHttpInfo",
    value: function listWafFirewallVersionsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id']
      };
      var queryParams = {
        'include': options['include'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafFirewallVersionsResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of firewall versions associated with a specific firewall.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {String} [options.include] - Include relationships. Optional.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallVersionsResponse}
     */

  }, {
    key: "listWafFirewallVersions",
    value: function listWafFirewallVersions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listWafFirewallVersionsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a specific firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {module:model/WafFirewallVersion} [options.waf_firewall_version]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallVersionResponse} and HTTP response
     */

  }, {
    key: "updateWafFirewallVersionWithHttpInfo",
    value: function updateWafFirewallVersionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['waf_firewall_version']; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'firewall_version_number' is set.


      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafFirewallVersionResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{firewall_version_number}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a specific firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {module:model/WafFirewallVersion} [options.waf_firewall_version]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallVersionResponse}
     */

  }, {
    key: "updateWafFirewallVersion",
    value: function updateWafFirewallVersion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateWafFirewallVersionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WafFirewallVersionsApi;
}();

exports["default"] = WafFirewallVersionsApi;