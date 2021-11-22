"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WafRuleResponse = _interopRequireDefault(require("../model/WafRuleResponse"));

var _WafRulesResponse = _interopRequireDefault(require("../model/WafRulesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WafRules service.
* @module api/WafRulesApi
* @version 3.0.0-alpha1
*/
var WafRulesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WafRulesApi. 
  * @alias module:api/WafRulesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WafRulesApi(apiClient) {
    _classCallCheck(this, WafRulesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Get a specific rule. The `id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.
   * @param {Object} options
   * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
   * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_tags` and `waf_rule_revisions`. 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafRuleResponse} and HTTP response
   */


  _createClass(WafRulesApi, [{
    key: "getWafRuleWithHttpInfo",
    value: function getWafRuleWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'waf_rule_id' is set.

      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      var pathParams = {
        'waf_rule_id': options['waf_rule_id']
      };
      var queryParams = {
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafRuleResponse["default"];
      return this.apiClient.callApi('/waf/rules/{waf_rule_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a specific rule. The `id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.
     * @param {Object} options
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_tags` and `waf_rule_revisions`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafRuleResponse}
     */

  }, {
    key: "getWafRule",
    value: function getWafRule() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getWafRuleWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all available WAF rules.
     * @param {Object} options
     * @param {String} [options.filter_modsec_rule_id] - Limit the returned rules to a specific ModSecurity rule ID.
     * @param {String} [options.filter_waf_tags_name] - Limit the returned rules to a set linked to a tag by name.
     * @param {String} [options.filter_waf_rule_revisions_source] - Limit the returned rules to a set linked to a source.
     * @param {String} [options.filter_waf_firewall_id_not_match] - Limit the returned rules to a set not included in the active firewall version for a firewall.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_tags` and `waf_rule_revisions`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafRulesResponse} and HTTP response
     */

  }, {
    key: "listWafRulesWithHttpInfo",
    value: function listWafRulesWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter[modsec_rule_id]': options['filter_modsec_rule_id'],
        'filter[waf_tags][name]': options['filter_waf_tags_name'],
        'filter[waf_rule_revisions][source]': options['filter_waf_rule_revisions_source'],
        'filter[waf_firewall.id][not][match]': options['filter_waf_firewall_id_not_match'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafRulesResponse["default"];
      return this.apiClient.callApi('/waf/rules', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all available WAF rules.
     * @param {Object} options
     * @param {String} [options.filter_modsec_rule_id] - Limit the returned rules to a specific ModSecurity rule ID.
     * @param {String} [options.filter_waf_tags_name] - Limit the returned rules to a set linked to a tag by name.
     * @param {String} [options.filter_waf_rule_revisions_source] - Limit the returned rules to a set linked to a source.
     * @param {String} [options.filter_waf_firewall_id_not_match] - Limit the returned rules to a set not included in the active firewall version for a firewall.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_tags` and `waf_rule_revisions`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafRulesResponse}
     */

  }, {
    key: "listWafRules",
    value: function listWafRules() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listWafRulesWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WafRulesApi;
}();

exports["default"] = WafRulesApi;