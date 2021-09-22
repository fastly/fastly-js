"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WafFirewall = _interopRequireDefault(require("../model/WafFirewall"));

var _WafFirewallResponse = _interopRequireDefault(require("../model/WafFirewallResponse"));

var _WafFirewallsResponse = _interopRequireDefault(require("../model/WafFirewallsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WafFirewalls service.
* @module api/WafFirewallsApi
* @version 3.0.0-alpha1
*/
var WafFirewallsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WafFirewallsApi. 
  * @alias module:api/WafFirewallsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WafFirewallsApi(apiClient) {
    _classCallCheck(this, WafFirewallsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a firewall object for a particular service and service version using a defined `prefetch_condition` and `response`. If the `prefetch_condition` or the `response` is missing from the request body, Fastly will generate a default object on your service. 
   * @param {Object} options
   * @param {module:model/WafFirewall} [options.waf_firewall]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallResponse} and HTTP response
   */


  _createClass(WafFirewallsApi, [{
    key: "createWafFirewallWithHttpInfo",
    value: function createWafFirewallWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['waf_firewall'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafFirewallResponse["default"];
      return this.apiClient.callApi('/waf/firewalls', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a firewall object for a particular service and service version using a defined `prefetch_condition` and `response`. If the `prefetch_condition` or the `response` is missing from the request body, Fastly will generate a default object on your service. 
     * @param {Object} options
     * @param {module:model/WafFirewall} [options.waf_firewall]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallResponse}
     */

  }, {
    key: "createWafFirewall",
    value: function createWafFirewall() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createWafFirewallWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the firewall object for a particular service and service version. 
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {module:model/WafFirewall} [options.waf_firewall]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteWafFirewallWithHttpInfo",
    value: function deleteWafFirewallWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['waf_firewall']; // Verify the required parameter 'firewall_id' is set.

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
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the firewall object for a particular service and service version. 
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {module:model/WafFirewall} [options.waf_firewall]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteWafFirewall",
    value: function deleteWafFirewall() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteWafFirewallWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a specific firewall object.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {String} [options.filter_service_version_number] - Limit the results returned to a specific service version.
     * @param {module:model/String} [options.include='waf_firewall_versions'] - Include related objects. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallResponse} and HTTP response
     */

  }, {
    key: "getWafFirewallWithHttpInfo",
    value: function getWafFirewallWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id']
      };
      var queryParams = {
        'filter[service_version_number]': options['filter_service_version_number'],
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafFirewallResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a specific firewall object.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {String} [options.filter_service_version_number] - Limit the results returned to a specific service version.
     * @param {module:model/String} [options.include='waf_firewall_versions'] - Include related objects. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallResponse}
     */

  }, {
    key: "getWafFirewall",
    value: function getWafFirewall() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getWafFirewallWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all firewall objects.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.filter_service_id] - Limit the results returned to a specific service.
     * @param {String} [options.filter_service_version_number] - Limit the results returned to a specific service version.
     * @param {module:model/String} [options.include='waf_firewall_versions'] - Include related objects. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallsResponse} and HTTP response
     */

  }, {
    key: "listWafFirewallsWithHttpInfo",
    value: function listWafFirewallsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'filter[service_id]': options['filter_service_id'],
        'filter[service_version_number]': options['filter_service_version_number'],
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafFirewallsResponse["default"];
      return this.apiClient.callApi('/waf/firewalls', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all firewall objects.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.filter_service_id] - Limit the results returned to a specific service.
     * @param {String} [options.filter_service_version_number] - Limit the results returned to a specific service version.
     * @param {module:model/String} [options.include='waf_firewall_versions'] - Include related objects. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallsResponse}
     */

  }, {
    key: "listWafFirewalls",
    value: function listWafFirewalls() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listWafFirewallsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a firewall object for a particular service and service version. Specifying a `service_version_number` is required. 
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {module:model/WafFirewall} [options.waf_firewall]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafFirewallResponse} and HTTP response
     */

  }, {
    key: "updateWafFirewallWithHttpInfo",
    value: function updateWafFirewallWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['waf_firewall']; // Verify the required parameter 'firewall_id' is set.

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
      var returnType = _WafFirewallResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a firewall object for a particular service and service version. Specifying a `service_version_number` is required. 
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {module:model/WafFirewall} [options.waf_firewall]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafFirewallResponse}
     */

  }, {
    key: "updateWafFirewall",
    value: function updateWafFirewall() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateWafFirewallWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WafFirewallsApi;
}();

exports["default"] = WafFirewallsApi;