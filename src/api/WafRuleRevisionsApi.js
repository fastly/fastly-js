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
import WafRuleRevisionResponse from '../model/WafRuleRevisionResponse';
import WafRuleRevisionsResponse from '../model/WafRuleRevisionsResponse';

/**
* WafRuleRevisions service.
* @module api/WafRuleRevisionsApi
* @version 3.2.0
*/
export default class WafRuleRevisionsApi {

    /**
    * Constructs a new WafRuleRevisionsApi. 
    * @alias module:api/WafRuleRevisionsApi
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
     * Get a specific rule revision.
     * @param {Object} options
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {Number} options.waf_rule_revision_number - Revision number.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule`, `vcl`, and `source`. The `vcl` and `source` relationships show the WAF VCL and corresponding ModSecurity source. These fields are blank unless the relationship is included. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafRuleRevisionResponse} and HTTP response
     */
    getWafRuleRevisionWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'waf_rule_id' is set.
      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }
      // Verify the required parameter 'waf_rule_revision_number' is set.
      if (options['waf_rule_revision_number'] === undefined || options['waf_rule_revision_number'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_revision_number'.");
      }

      let pathParams = {
        'waf_rule_id': options['waf_rule_id'],
        'waf_rule_revision_number': options['waf_rule_revision_number']
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
      let returnType = WafRuleRevisionResponse;
      return this.apiClient.callApi(
        '/waf/rules/{waf_rule_id}/revisions/{waf_rule_revision_number}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a specific rule revision.
     * @param {Object} options
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {Number} options.waf_rule_revision_number - Revision number.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rule`, `vcl`, and `source`. The `vcl` and `source` relationships show the WAF VCL and corresponding ModSecurity source. These fields are blank unless the relationship is included. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafRuleRevisionResponse}
     */
    getWafRuleRevision(options = {}) {
      return this.getWafRuleRevisionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all revisions for a specific rule. The `rule_id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.
     * @param {Object} options
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.include='waf_rule'] - Include relationships. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafRuleRevisionsResponse} and HTTP response
     */
    listWafRuleRevisionsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'waf_rule_id' is set.
      if (options['waf_rule_id'] === undefined || options['waf_rule_id'] === null) {
        throw new Error("Missing the required parameter 'waf_rule_id'.");
      }

      let pathParams = {
        'waf_rule_id': options['waf_rule_id']
      };
      let queryParams = {
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
      let returnType = WafRuleRevisionsResponse;
      return this.apiClient.callApi(
        '/waf/rules/{waf_rule_id}/revisions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all revisions for a specific rule. The `rule_id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.
     * @param {Object} options
     * @param {String} options.waf_rule_id - Alphanumeric string identifying a WAF rule.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.include='waf_rule'] - Include relationships. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafRuleRevisionsResponse}
     */
    listWafRuleRevisions(options = {}) {
      return this.listWafRuleRevisionsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
