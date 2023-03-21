/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BulkWafActiveRules from '../model/BulkWafActiveRules';
import WafActiveRule from '../model/WafActiveRule';
import WafActiveRuleCreationResponse from '../model/WafActiveRuleCreationResponse';
import WafActiveRuleData from '../model/WafActiveRuleData';
import WafActiveRuleResponse from '../model/WafActiveRuleResponse';
import WafActiveRulesResponse from '../model/WafActiveRulesResponse';

/**
* WafActiveRules service.
* @module api/WafActiveRulesApi
* @version 3.2.0
*/
export default class WafActiveRulesApi {

    /**
    * Constructs a new WafActiveRulesApi. 
    * @alias module:api/WafActiveRulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
            this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
        }
    }


    /**
     * Bulk update all active rules on a [firewall version](https://developer.fastly.com/reference/api/waf/firewall-version/). This endpoint will not add new active rules, only update existing active rules.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {module:model/WafActiveRuleData} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    bulkUpdateWafActiveRulesWithHttpInfo(options = {}) {
      let postBody = options['body'];
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/bulk', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Bulk update all active rules on a [firewall version](https://developer.fastly.com/reference/api/waf/firewall-version/). This endpoint will not add new active rules, only update existing active rules.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {module:model/WafActiveRuleData} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    bulkUpdateWafActiveRules(options = {}) {
      return this.bulkUpdateWafActiveRulesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Create an active rule for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafActiveRuleCreationResponse} and HTTP response
     */
    createWafActiveRuleWithHttpInfo(options = {}) {
      let postBody = options['waf_active_rule'];
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json', 'application/vnd.api+json; ext=bulk'];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafActiveRuleCreationResponse;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an active rule for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafActiveRuleCreationResponse}
     */
    createWafActiveRule(options = {}) {
      return this.createWafActiveRuleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Create active rules by tag. This endpoint will create active rules using the latest revision available for each rule.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.waf_tag_name - Name of the tag.
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createWafActiveRulesTagWithHttpInfo(options = {}) {
      let postBody = options['waf_active_rule'];
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'waf_tag_name' is set.
      if (options['waf_tag_name'] === undefined || options['waf_tag_name'] === null) {
        throw new Error("Missing the required parameter 'waf_tag_name'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id'],
        'waf_tag_name': options['waf_tag_name']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{version_id}/tags/{waf_tag_name}/active-rules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create active rules by tag. This endpoint will create active rules using the latest revision available for each rule.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.waf_tag_name - Name of the tag.
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createWafActiveRulesTag(options = {}) {
      return this.createWafActiveRulesTagWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete an active rule for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWafActiveRuleWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'waf_rule_id' is set.
      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id'],
        'waf_rule_id': options['waf_rule_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an active rule for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWafActiveRule(options = {}) {
      return this.deleteWafActiveRuleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific active rule object. Includes details of the rule revision associated with the active rule object by default.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafActiveRuleResponse} and HTTP response
     */
    getWafActiveRuleWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'waf_rule_id' is set.
      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id'],
        'waf_rule_id': options['waf_rule_id']
      };
      let queryParams = {
        'include': options['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafActiveRuleResponse;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a specific active rule object. Includes details of the rule revision associated with the active rule object by default.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafActiveRuleResponse}
     */
    getWafActiveRule(options = {}) {
      return this.getWafActiveRuleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all active rules for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.filter_status] - Limit results to active rules with the specified status.
     * @param {String} [options.filter_waf_rule_revision_message] - Limit results to active rules with the specified message.
     * @param {String} [options.filter_waf_rule_revision_modsec_rule_id] - Limit results to active rules that represent the specified ModSecurity modsec_rule_id.
     * @param {String} [options.filter_outdated] - Limit results to active rules referencing an outdated rule revision.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafActiveRulesResponse} and HTTP response
     */
    listWafActiveRulesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id']
      };
      let queryParams = {
        'filter[status]': options['filter_status'],
        'filter[waf_rule_revision][message]': options['filter_waf_rule_revision_message'],
        'filter[waf_rule_revision][modsec_rule_id]': options['filter_waf_rule_revision_modsec_rule_id'],
        'filter[outdated]': options['filter_outdated'],
        'include': options['include'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafActiveRulesResponse;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all active rules for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.filter_status] - Limit results to active rules with the specified status.
     * @param {String} [options.filter_waf_rule_revision_message] - Limit results to active rules with the specified message.
     * @param {String} [options.filter_waf_rule_revision_modsec_rule_id] - Limit results to active rules that represent the specified ModSecurity modsec_rule_id.
     * @param {String} [options.filter_outdated] - Limit results to active rules referencing an outdated rule revision.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafActiveRulesResponse}
     */
    listWafActiveRules(options = {}) {
      return this.listWafActiveRulesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update an active rule's status for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafActiveRuleResponse} and HTTP response
     */
    updateWafActiveRuleWithHttpInfo(options = {}) {
      let postBody = options['waf_active_rule'];
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'waf_rule_id' is set.
      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'version_id': options['version_id'],
        'waf_rule_id': options['waf_rule_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafActiveRuleResponse;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an active rule's status for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {module:model/WafActiveRule} [options.waf_active_rule]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafActiveRuleResponse}
     */
    updateWafActiveRule(options = {}) {
      return this.updateWafActiveRuleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
