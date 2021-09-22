"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WafActiveRule = _interopRequireDefault(require("../model/WafActiveRule"));

var _WafActiveRuleCreationResponse = _interopRequireDefault(require("../model/WafActiveRuleCreationResponse"));

var _WafActiveRuleData = _interopRequireDefault(require("../model/WafActiveRuleData"));

var _WafActiveRuleResponse = _interopRequireDefault(require("../model/WafActiveRuleResponse"));

var _WafActiveRulesResponse = _interopRequireDefault(require("../model/WafActiveRulesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WafActiveRules service.
* @module api/WafActiveRulesApi
* @version 3.0.0-alpha1
*/
var WafActiveRulesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WafActiveRulesApi. 
  * @alias module:api/WafActiveRulesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WafActiveRulesApi(apiClient) {
    _classCallCheck(this, WafActiveRulesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete many active rules on a particular firewall version using the active rule ID. Limited to 500 rules per request.
   * @param {Object} options
   * @param {String} options.firewall_id
   * @param {Number} options.version_id
   * @param {Object} [options.body]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(WafActiveRulesApi, [{
    key: "bulkDeleteWafActiveRulesWithHttpInfo",
    value: function bulkDeleteWafActiveRulesWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['body']; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json; ext=bulk'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete many active rules on a particular firewall version using the active rule ID. Limited to 500 rules per request.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {Object} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "bulkDeleteWafActiveRules",
    value: function bulkDeleteWafActiveRules() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.bulkDeleteWafActiveRulesWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Bulk update all active rules on a [firewall version](https://developer.fastly.com/reference/api/waf/firewall-version/). This endpoint will not add new active rules, only update existing active rules.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {module:model/WafActiveRuleData} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "bulkUpdateWafActiveRulesWithHttpInfo",
    value: function bulkUpdateWafActiveRulesWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['body']; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/bulk', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Bulk update all active rules on a [firewall version](https://developer.fastly.com/reference/api/waf/firewall-version/). This endpoint will not add new active rules, only update existing active rules.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {module:model/WafActiveRuleData} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "bulkUpdateWafActiveRules",
    value: function bulkUpdateWafActiveRules() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.bulkUpdateWafActiveRulesWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create an active rule for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafActiveRuleCreationResponse} and HTTP response
     */

  }, {
    key: "createWafActiveRuleWithHttpInfo",
    value: function createWafActiveRuleWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['waf_active_rule']; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json', 'application/vnd.api+json; ext=bulk'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafActiveRuleCreationResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create an active rule for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafActiveRuleCreationResponse}
     */

  }, {
    key: "createWafActiveRule",
    value: function createWafActiveRule() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createWafActiveRuleWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create active rules by tag. This endpoint will create active rules using the latest revision available for each rule.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {String} options.waf_tag_name
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "createWafActiveRulesTagWithHttpInfo",
    value: function createWafActiveRulesTagWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['waf_active_rule']; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'waf_tag_name' is set.


      if (options['waf_tag_name'] === undefined || options['waf_tag_name'] === null) {
        throw new Error("Missing the required parameter 'waf_tag_name'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id'],
        'waf_tag_name': options['waf_tag_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{version_id}/tags/{waf_tag_name}/active-rules', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create active rules by tag. This endpoint will create active rules using the latest revision available for each rule.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {String} options.waf_tag_name
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "createWafActiveRulesTag",
    value: function createWafActiveRulesTag() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createWafActiveRulesTagWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete an active rule for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {String} options.waf_rule_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteWafActiveRuleWithHttpInfo",
    value: function deleteWafActiveRuleWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'waf_rule_id' is set.


      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id'],
        'waf_rule_id': options['waf_rule_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete an active rule for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {String} options.waf_rule_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteWafActiveRule",
    value: function deleteWafActiveRule() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteWafActiveRuleWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a specific active rule object. Includes details of the rule revision associated with the active rule object by default.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {String} options.waf_rule_id
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafActiveRuleResponse} and HTTP response
     */

  }, {
    key: "getWafActiveRuleWithHttpInfo",
    value: function getWafActiveRuleWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'waf_rule_id' is set.


      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id'],
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
      var returnType = _WafActiveRuleResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a specific active rule object. Includes details of the rule revision associated with the active rule object by default.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {String} options.waf_rule_id
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafActiveRuleResponse}
     */

  }, {
    key: "getWafActiveRule",
    value: function getWafActiveRule() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getWafActiveRuleWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all active rules for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {String} [options.filter_status] - Limit results to active rules with the specified status.
     * @param {String} [options.filter_waf_rule_revision_message] - Limit results to active rules with the specified message.
     * @param {String} [options.filter_waf_rule_revision_modsec_rule_id] - Limit results to active rules that represent the specified ModSecurity modsec_rule_id.
     * @param {String} [options.filter_outdated] - Limit results to active rules referencing an outdated rule revision.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafActiveRulesResponse} and HTTP response
     */

  }, {
    key: "listWafActiveRulesWithHttpInfo",
    value: function listWafActiveRulesWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id']
      };
      var queryParams = {
        'filter[status]': options['filter_status'],
        'filter[waf_rule_revision][message]': options['filter_waf_rule_revision_message'],
        'filter[waf_rule_revision][modsec_rule_id]': options['filter_waf_rule_revision_modsec_rule_id'],
        'filter[outdated]': options['filter_outdated'],
        'include': options['include'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafActiveRulesResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all active rules for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {String} [options.filter_status] - Limit results to active rules with the specified status.
     * @param {String} [options.filter_waf_rule_revision_message] - Limit results to active rules with the specified message.
     * @param {String} [options.filter_waf_rule_revision_modsec_rule_id] - Limit results to active rules that represent the specified ModSecurity modsec_rule_id.
     * @param {String} [options.filter_outdated] - Limit results to active rules referencing an outdated rule revision.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafActiveRulesResponse}
     */

  }, {
    key: "listWafActiveRules",
    value: function listWafActiveRules() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listWafActiveRulesWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an active rule's status for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {String} options.waf_rule_id
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafActiveRuleResponse} and HTTP response
     */

  }, {
    key: "updateWafActiveRuleWithHttpInfo",
    value: function updateWafActiveRuleWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['waf_active_rule']; // Verify the required parameter 'firewall_id' is set.

      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'waf_rule_id' is set.


      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      var pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id'],
        'waf_rule_id': options['waf_rule_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafActiveRuleResponse["default"];
      return this.apiClient.callApi('/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an active rule's status for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id
     * @param {Number} options.version_id
     * @param {String} options.waf_rule_id
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafActiveRuleResponse}
     */

  }, {
    key: "updateWafActiveRule",
    value: function updateWafActiveRule() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateWafActiveRuleWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WafActiveRulesApi;
}();

exports["default"] = WafActiveRulesApi;