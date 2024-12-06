/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* LegacyWafRule service.
* @module api/LegacyWafRuleApi
* @version 8.0.0
*/
export default class LegacyWafRuleApi {

    /**
    * Constructs a new LegacyWafRuleApi. 
    * @alias module:api/LegacyWafRuleApi
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
     * Get associated VCL for a specific rule associated with a specific firewall.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getLegacyWafFirewallRuleVclWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'waf_rule_id' is set.
      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'waf_rule_id': options['waf_rule_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/wafs/{firewall_id}/rules/{waf_rule_id}/vcl', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get associated VCL for a specific rule associated with a specific firewall.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getLegacyWafFirewallRuleVcl(options = {}) {
      return this.getLegacyWafFirewallRuleVclWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific rule.
     * @param {Object} options
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {String} [options.filter_configuration_set_id] - Optional. Limit rule to a specific configuration set or pass \"all\" to search all configuration sets, including stale ones.
     * @param {String} [options.include] - Include relationships. Optional. Comma separated values. Permitted values: `tags`, `rule_statuses`, `source`, and `vcl`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getLegacyWafRuleWithHttpInfo(options = {}) {
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
        'filter[configuration_set_id]': options['filter_configuration_set_id'],
        'include': options['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/wafs/rules/{waf_rule_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific rule.
     * @param {Object} options
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {String} [options.filter_configuration_set_id] - Optional. Limit rule to a specific configuration set or pass \"all\" to search all configuration sets, including stale ones.
     * @param {String} [options.include] - Include relationships. Optional. Comma separated values. Permitted values: `tags`, `rule_statuses`, `source`, and `vcl`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getLegacyWafRule(options = {}) {
      return this.getLegacyWafRuleWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get associated VCL for a specific rule.
     * @param {Object} options
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getLegacyWafRuleVclWithHttpInfo(options = {}) {
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
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/wafs/rules/{waf_rule_id}/vcl', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get associated VCL for a specific rule.
     * @param {Object} options
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getLegacyWafRuleVcl(options = {}) {
      return this.getLegacyWafRuleVclWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all rules in the latest configuration set.
     * @param {Object} options
     * @param {String} [options.filter_rule_id] - Limit the returned rules to a specific rule ID.
     * @param {String} [options.filter_severity] - Limit the returned rules to a specific severity.
     * @param {String} [options.filter_tags_name] - Limit the returned rules to a set linked to a tag by name.
     * @param {String} [options.filter_configuration_set_id] - Optional. Limit rules to specific configuration set or pass \"all\" to search all configuration sets, including stale ones.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional. Comma separated values. Permitted values: `tags`, `rule_statuses`, and `source`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */
    listLegacyWafRulesWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[rule_id]': options['filter_rule_id'],
        'filter[severity]': options['filter_severity'],
        'filter[tags][name]': options['filter_tags_name'],
        'filter[configuration_set_id]': options['filter_configuration_set_id'],
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
      let returnType = [Object];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/wafs/rules', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all rules in the latest configuration set.
     * @param {Object} options
     * @param {String} [options.filter_rule_id] - Limit the returned rules to a specific rule ID.
     * @param {String} [options.filter_severity] - Limit the returned rules to a specific severity.
     * @param {String} [options.filter_tags_name] - Limit the returned rules to a set linked to a tag by name.
     * @param {String} [options.filter_configuration_set_id] - Optional. Limit rules to specific configuration set or pass \"all\" to search all configuration sets, including stale ones.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional. Comma separated values. Permitted values: `tags`, `rule_statuses`, and `source`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */
    listLegacyWafRules(options = {}) {
      return this.listLegacyWafRulesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
