"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WafRuleRevisionResponse = _interopRequireDefault(require("../model/WafRuleRevisionResponse"));

var _WafRuleRevisionsResponse = _interopRequireDefault(require("../model/WafRuleRevisionsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WafRuleRevisions service.
* @module api/WafRuleRevisionsApi
* @version 3.0.0-alpha1
*/
var WafRuleRevisionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WafRuleRevisionsApi. 
  * @alias module:api/WafRuleRevisionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WafRuleRevisionsApi(apiClient) {
    _classCallCheck(this, WafRuleRevisionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get a specific rule revision.
   * @param {Object} options
   * @param {String} options.waf_rule_id
   * @param {Number} options.waf_rule_revision_number
   * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule`, `vcl`, and `source`. The `vcl` and `source` relationships show the WAF VCL and corresponding ModSecurity source. These fields are blank unless the relationship is included. 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafRuleRevisionResponse} and HTTP response
   */


  _createClass(WafRuleRevisionsApi, [{
    key: "getWafRuleRevisionWithHttpInfo",
    value: function getWafRuleRevisionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'waf_rule_id' is set.

      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      } // Verify the required parameter 'waf_rule_revision_number' is set.


      if (options['waf_rule_revision_number'] === undefined || options['waf_rule_revision_number'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_revision_number'.");
      }

      var pathParams = {
        'waf_rule_id': options['waf_rule_id'],
        'waf_rule_revision_number': options['waf_rule_revision_number']
      };
      var queryParams = {
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafRuleRevisionResponse["default"];
      return this.apiClient.callApi('/waf/rules/{waf_rule_id}/revisions/{waf_rule_revision_number}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a specific rule revision.
     * @param {Object} options
     * @param {String} options.waf_rule_id
     * @param {Number} options.waf_rule_revision_number
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule`, `vcl`, and `source`. The `vcl` and `source` relationships show the WAF VCL and corresponding ModSecurity source. These fields are blank unless the relationship is included. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafRuleRevisionResponse}
     */

  }, {
    key: "getWafRuleRevision",
    value: function getWafRuleRevision() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getWafRuleRevisionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all revisions for a specific rule. The `rule_id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.
     * @param {Object} options
     * @param {String} options.waf_rule_id
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.include='waf_rule'] - Include relationships. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafRuleRevisionsResponse} and HTTP response
     */

  }, {
    key: "listWafRuleRevisionsWithHttpInfo",
    value: function listWafRuleRevisionsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'waf_rule_id' is set.

      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      var pathParams = {
        'waf_rule_id': options['waf_rule_id']
      };
      var queryParams = {
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafRuleRevisionsResponse["default"];
      return this.apiClient.callApi('/waf/rules/{waf_rule_id}/revisions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all revisions for a specific rule. The `rule_id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.
     * @param {Object} options
     * @param {String} options.waf_rule_id
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.include='waf_rule'] - Include relationships. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafRuleRevisionsResponse}
     */

  }, {
    key: "listWafRuleRevisions",
    value: function listWafRuleRevisions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listWafRuleRevisionsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WafRuleRevisionsApi;
}();

exports["default"] = WafRuleRevisionsApi;