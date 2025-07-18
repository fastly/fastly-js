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
import TlsDomainsResponse from '../model/TlsDomainsResponse';

/**
* TlsDomains service.
* @module api/TlsDomainsApi
* @version 12.1.0
*/
export default class TlsDomainsApi {

    /**
    * Constructs a new TlsDomainsApi. 
    * @alias module:api/TlsDomainsApi
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
     * List all TLS domains.
     * @param {Object} options
     * @param {String} [options.filter_in_use] - Optional. Limit the returned domains to those currently using Fastly to terminate TLS with SNI (that is, domains considered \"in use\") Permitted values: true, false.
     * @param {String} [options.filter_tls_certificates_id] - Optional. Limit the returned domains to those listed in the given TLS certificate's SAN list.
     * @param {String} [options.filter_tls_subscriptions_id] - Optional. Limit the returned domains to those for a given TLS subscription.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_activations`, `tls_certificates`, `tls_subscriptions`, `tls_subscriptions.tls_authorizations`, `tls_authorizations.globalsign_email_challenge`, and `tls_authorizations.self_managed_http_challenge`. 
     * @param {module:model/String} [options.sort='id'] - The order in which to list the results.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsDomainsResponse} and HTTP response
     */
    listTlsDomainsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[in_use]': options['filter_in_use'],
        'filter[tls_certificates.id]': options['filter_tls_certificates_id'],
        'filter[tls_subscriptions.id]': options['filter_tls_subscriptions_id'],
        'include': options['include'],
        'sort': options['sort'],
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
      let returnType = TlsDomainsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/domains', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all TLS domains.
     * @param {Object} options
     * @param {String} [options.filter_in_use] - Optional. Limit the returned domains to those currently using Fastly to terminate TLS with SNI (that is, domains considered \"in use\") Permitted values: true, false.
     * @param {String} [options.filter_tls_certificates_id] - Optional. Limit the returned domains to those listed in the given TLS certificate's SAN list.
     * @param {String} [options.filter_tls_subscriptions_id] - Optional. Limit the returned domains to those for a given TLS subscription.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_activations`, `tls_certificates`, `tls_subscriptions`, `tls_subscriptions.tls_authorizations`, `tls_authorizations.globalsign_email_challenge`, and `tls_authorizations.self_managed_http_challenge`. 
     * @param {module:model/String} [options.sort='id'] - The order in which to list the results.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsDomainsResponse}
     */
    listTlsDomains(options = {}) {
      return this.listTlsDomainsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
