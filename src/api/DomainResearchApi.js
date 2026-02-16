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
import InlineResponse2009 from '../model/InlineResponse2009';
import Status from '../model/Status';

/**
* DomainResearch service.
* @module api/DomainResearchApi
* @version 15.0.0
*/
export default class DomainResearchApi {

    /**
    * Constructs a new DomainResearchApi. 
    * @alias module:api/DomainResearchApi
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
     * The `Status` method checks the availability status of a single domain name.
     * @param {Object} options
     * @param {String} options.domain
     * @param {String} [options.scope]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Status} and HTTP response
     */
    domainStatusWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'domain' is set.
      if (options['domain'] === undefined || options['domain'] === null) {
        throw new Error("Missing the required parameter 'domain'.");
      }

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'domain': options['domain'],
        'scope': options['scope']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Status;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/tools/status', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * The `Status` method checks the availability status of a single domain name.
     * @param {Object} options
     * @param {String} options.domain
     * @param {String} [options.scope]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Status}
     */
    domainStatus(options = {}) {
      return this.domainStatusWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * The `Suggest` method performs a real-time query of the search term(s) against the [known zone database](http://zonedb.org), making recommendations, stemming, and applying Unicode folding, IDN normalization, registrar supported-zone restrictions, and other refinements. **Note:** `Suggest` method responses do not include domain availability status. 
     * @param {Object} options
     * @param {String} options.query
     * @param {String} [options.defaults]
     * @param {String} [options.keywords]
     * @param {String} [options.location]
     * @param {String} [options.vendor]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2009} and HTTP response
     */
    suggestDomainsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'query' is set.
      if (options['query'] === undefined || options['query'] === null) {
        throw new Error("Missing the required parameter 'query'.");
      }

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'query': options['query'],
        'defaults': options['defaults'],
        'keywords': options['keywords'],
        'location': options['location'],
        'vendor': options['vendor']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2009;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/tools/suggest', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * The `Suggest` method performs a real-time query of the search term(s) against the [known zone database](http://zonedb.org), making recommendations, stemming, and applying Unicode folding, IDN normalization, registrar supported-zone restrictions, and other refinements. **Note:** `Suggest` method responses do not include domain availability status. 
     * @param {Object} options
     * @param {String} options.query
     * @param {String} [options.defaults]
     * @param {String} [options.keywords]
     * @param {String} [options.location]
     * @param {String} [options.vendor]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2009}
     */
    suggestDomains(options = {}) {
      return this.suggestDomainsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
