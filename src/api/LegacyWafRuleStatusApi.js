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
* LegacyWafRuleStatus service.
* @module api/LegacyWafRuleStatusApi
* @version 7.10.0
*/
export default class LegacyWafRuleStatusApi {

    /**
    * Constructs a new LegacyWafRuleStatusApi. 
    * @alias module:api/LegacyWafRuleStatusApi
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
     * Get a specific rule status object for a particular service, firewall, and rule.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getWafFirewallRuleStatusWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'waf_rule_id' is set.
      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
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
        '/service/{service_id}/wafs/{firewall_id}/rules/{waf_rule_id}/rule_status', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific rule status object for a particular service, firewall, and rule.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getWafFirewallRuleStatus(options = {}) {
      return this.getWafFirewallRuleStatusWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all rule statuses for a particular service and firewall.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} [options.filter_status] - Limit results to rule statuses with the specified status.
     * @param {String} [options.filter_rule_message] - Limit results to rule statuses whose rules have the specified message.
     * @param {String} [options.filter_rule_rule_id] - Limit results to rule statuses whose rules represent the specified ModSecurity rule_id.
     * @param {String} [options.filter_rule_tags] - Limit results to rule statuses whose rules relate to the specified tag IDs.
     * @param {String} [options.filter_rule_tags_name] - Limit results to rule statuses whose rules related to the named tags.
     * @param {String} [options.include] - Include relationships. Optional, comma separated values. Permitted values: `tags`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listWafFirewallRuleStatusesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'firewall_id': options['firewall_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[status]': options['filter_status'],
        'filter[rule][message]': options['filter_rule_message'],
        'filter[rule][rule_id]': options['filter_rule_rule_id'],
        'filter[rule][tags]': options['filter_rule_tags'],
        'filter[rule][tags][name]': options['filter_rule_tags_name'],
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
        '/service/{service_id}/wafs/{firewall_id}/rule_statuses', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all rule statuses for a particular service and firewall.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} [options.filter_status] - Limit results to rule statuses with the specified status.
     * @param {String} [options.filter_rule_message] - Limit results to rule statuses whose rules have the specified message.
     * @param {String} [options.filter_rule_rule_id] - Limit results to rule statuses whose rules represent the specified ModSecurity rule_id.
     * @param {String} [options.filter_rule_tags] - Limit results to rule statuses whose rules relate to the specified tag IDs.
     * @param {String} [options.filter_rule_tags_name] - Limit results to rule statuses whose rules related to the named tags.
     * @param {String} [options.include] - Include relationships. Optional, comma separated values. Permitted values: `tags`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listWafFirewallRuleStatuses(options = {}) {
      return this.listWafFirewallRuleStatusesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a rule status for a particular service, firewall, and rule.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateWafFirewallRuleStatusWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'waf_rule_id' is set.
      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
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
      let contentTypes = ['application/vnd.api+json'];
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
        '/service/{service_id}/wafs/{firewall_id}/rules/{waf_rule_id}/rule_status', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a rule status for a particular service, firewall, and rule.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateWafFirewallRuleStatus(options = {}) {
      return this.updateWafFirewallRuleStatusWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Create or update all rule statuses for a particular service and firewall, based on tag name. By default, only rule status for enabled rules (with status log or block) will be updated. To update rule statuses for disabled rules under the specified tag, use the force attribute.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} [options.name] - The tag name to use to determine the set of rules to update. For example, OWASP or language-php.
     * @param {String} [options.force] - Whether or not to update rule statuses for disabled rules. Optional.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateWafFirewallRuleStatusesTagWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'firewall_id': options['firewall_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'name': options['name'],
        'force': options['force']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
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
        '/service/{service_id}/wafs/{firewall_id}/rule_statuses', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create or update all rule statuses for a particular service and firewall, based on tag name. By default, only rule status for enabled rules (with status log or block) will be updated. To update rule statuses for disabled rules under the specified tag, use the force attribute.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} [options.name] - The tag name to use to determine the set of rules to update. For example, OWASP or language-php.
     * @param {String} [options.force] - Whether or not to update rule statuses for disabled rules. Optional.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateWafFirewallRuleStatusesTag(options = {}) {
      return this.updateWafFirewallRuleStatusesTagWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
