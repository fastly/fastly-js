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
import ErrorResponse from '../model/ErrorResponse';
import TlsCsr from '../model/TlsCsr';
import TlsCsrResponse from '../model/TlsCsrResponse';

/**
* TlsCsrs service.
* @module api/TlsCsrsApi
* @version 3.1.1
*/
export default class TlsCsrsApi {

    /**
    * Constructs a new TlsCsrsApi. 
    * @alias module:api/TlsCsrsApi
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
     * Creates a certificate signing request (CSR).
     * @param {Object} options
     * @param {module:model/TlsCsr} [options.tls_csr]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsCsrResponse} and HTTP response
     */
    createCsrWithHttpInfo(options = {}) {
      let postBody = options['tls_csr'];

      let pathParams = {
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
      let returnType = TlsCsrResponse;
      return this.apiClient.callApi(
        '/tls/certificate_signing_requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a certificate signing request (CSR).
     * @param {Object} options
     * @param {module:model/TlsCsr} [options.tls_csr]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsCsrResponse}
     */
    createCsr(options = {}) {
      return this.createCsrWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
