"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pagination = _interopRequireDefault(require("../model/Pagination"));

var _WafExclusion = _interopRequireDefault(require("../model/WafExclusion"));

var _WafExclusionResponse = _interopRequireDefault(require("../model/WafExclusionResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WafExclusions service.
* @module api/WafExclusionsApi
* @version 3.0.0-alpha1
*/
var WafExclusionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WafExclusionsApi. 
  * @alias module:api/WafExclusionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WafExclusionsApi(apiClient) {
    _classCallCheck(this, WafExclusionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a WAF exclusion for a particular firewall version.
   * @param {Object} options
   * @param {String} options.firewall_id
   * @param {Number} options.firewall_version_number
   * @param {module:model/WafExclusion} [options.waf_exclusion]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafExclusionResponse} and HTTP response
   */


  _createClass(WafExclusionsApi, [{
    key: "createWafRuleExclusionWithHttpInfo",
    value: function createWafRuleExclusionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['waf_exclusion']; // Verify the required parameter 'firewall_id' is set.

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
      var returnType = _WafExclusionResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a WAF exclusion for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {module:model/WafExclusion} [options.waf_exclusion]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafExclusionResponse}
     */

  }, {
    key: "createWafRuleExclusion",
    value: function createWafRuleExclusion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createWafRuleExclusionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a WAF exclusion for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {Number} options.exclusion_number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteWafRuleExclusionWithHttpInfo",
    value: function deleteWafRuleExclusionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'firewall_version_number' is set.


      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      } // Verify the required parameter 'exclusion_number' is set.


      if (options['exclusion_number'] === undefined || options['exclusion_number'] === null) {
        throw new Error("Missing the required parameter 'exclusion_number'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number'],
        'exclusion_number': options['exclusion_number']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a WAF exclusion for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {Number} options.exclusion_number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteWafRuleExclusion",
    value: function deleteWafRuleExclusion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteWafRuleExclusionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a specific WAF exclusion object.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {Number} options.exclusion_number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafExclusionResponse} and HTTP response
     */

  }, {
    key: "getWafRuleExclusionWithHttpInfo",
    value: function getWafRuleExclusionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'firewall_version_number' is set.


      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      } // Verify the required parameter 'exclusion_number' is set.


      if (options['exclusion_number'] === undefined || options['exclusion_number'] === null) {
        throw new Error("Missing the required parameter 'exclusion_number'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number'],
        'exclusion_number': options['exclusion_number']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafExclusionResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a specific WAF exclusion object.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {Number} options.exclusion_number
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafExclusionResponse}
     */

  }, {
    key: "getWafRuleExclusion",
    value: function getWafRuleExclusion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getWafRuleExclusionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all exclusions for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {module:model/String} [options.filter_exclusion_type] - Filters the results based on this exclusion type.
     * @param {String} [options.filter_name] - Filters the results based on name.
     * @param {Number} [options.filter_waf_rules_modsec_rule_id] - Filters the results based on this ModSecurity rule ID.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rules` and `waf_rule_revisions`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pagination} and HTTP response
     */

  }, {
    key: "listWafRuleExclusionsWithHttpInfo",
    value: function listWafRuleExclusionsWithHttpInfo() {
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
        'filter[exclusion_type]': options['filter_exclusion_type'],
        'filter[name]': options['filter_name'],
        'filter[waf_rules.modsec_rule_id]': options['filter_waf_rules_modsec_rule_id'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _Pagination["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all exclusions for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {module:model/String} [options.filter_exclusion_type] - Filters the results based on this exclusion type.
     * @param {String} [options.filter_name] - Filters the results based on name.
     * @param {Number} [options.filter_waf_rules_modsec_rule_id] - Filters the results based on this ModSecurity rule ID.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rules` and `waf_rule_revisions`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pagination}
     */

  }, {
    key: "listWafRuleExclusions",
    value: function listWafRuleExclusions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listWafRuleExclusionsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a WAF exclusion for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {Number} options.exclusion_number
     * @param {module:model/WafExclusion} [options.waf_exclusion]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafExclusionResponse} and HTTP response
     */

  }, {
    key: "updateWafRuleExclusionWithHttpInfo",
    value: function updateWafRuleExclusionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['waf_exclusion']; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'firewall_version_number' is set.


      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      } // Verify the required parameter 'exclusion_number' is set.


      if (options['exclusion_number'] === undefined || options['exclusion_number'] === null) {
        throw new Error("Missing the required parameter 'exclusion_number'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number'],
        'exclusion_number': options['exclusion_number']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafExclusionResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a WAF exclusion for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.firewall_version_number
     * @param {Number} options.exclusion_number
     * @param {module:model/WafExclusion} [options.waf_exclusion]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafExclusionResponse}
     */

  }, {
    key: "updateWafRuleExclusion",
    value: function updateWafRuleExclusion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateWafRuleExclusionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WafExclusionsApi;
}();

exports["default"] = WafExclusionsApi;