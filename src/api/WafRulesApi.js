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
import WafRuleResponse from '../model/WafRuleResponse';
import WafRulesResponse from '../model/WafRulesResponse';

/**
* WafRules service.
* @module api/WafRulesApi
* @version 5.0.2
*/
export default class WafRulesApi {

    /**
    * Constructs a new WafRulesApi. 
    * @alias module:api/WafRulesApi
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
     * Get a specific rule. The `id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.
     * @param {Object} options
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_tags` and `waf_rule_revisions`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafRuleResponse} and HTTP response
     */
    getWafRuleWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'waf_rule_id' is set.
      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      let pathParams = {
        'waf_rule_id': options['waf_rule_id']
      };
      let pathParamsAllowReserved = {
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
      let returnType = WafRuleResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/rules/{waf_rule_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific rule. The `id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.
     * @param {Object} options
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_tags` and `waf_rule_revisions`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafRuleResponse}
     */
    getWafRule(options = {}) {
      return this.getWafRuleWithHttpInfo(options)
        .then(function(response_and_data) {
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
    listWafRulesWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[modsec_rule_id]': options['filter_modsec_rule_id'],
        'filter[waf_tags][name]': options['filter_waf_tags_name'],
        'filter[waf_rule_revisions][source]': options['filter_waf_rule_revisions_source'],
        'filter[waf_firewall.id][not][match]': options['filter_waf_firewall_id_not_match'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'include': options['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafRulesResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/rules', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
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
    listWafRules(options = {}) {
      return this.listWafRulesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
