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
import TlsBulkCertificate from '../model/TlsBulkCertificate';
import TlsBulkCertificateResponse from '../model/TlsBulkCertificateResponse';
import TlsBulkCertificatesResponse from '../model/TlsBulkCertificatesResponse';

/**
* TlsBulkCertificates service.
* @module api/TlsBulkCertificatesApi
* @version 12.1.0
*/
export default class TlsBulkCertificatesApi {

    /**
    * Constructs a new TlsBulkCertificatesApi. 
    * @alias module:api/TlsBulkCertificatesApi
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
     * Destroy a certificate. This disables TLS for all domains listed as SAN entries.
     * @param {Object} options
     * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteBulkTlsCertWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'certificate_id' is set.
      if (options['certificate_id'] === undefined || options['certificate_id'] === null) {
        throw new Error("Missing the required parameter 'certificate_id'.");
      }

      let pathParams = {
        'certificate_id': options['certificate_id']
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
      let accepts = [];
      let returnType = null;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/bulk/certificates/{certificate_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Destroy a certificate. This disables TLS for all domains listed as SAN entries.
     * @param {Object} options
     * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteBulkTlsCert(options = {}) {
      return this.deleteBulkTlsCertWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a single certificate.
     * @param {Object} options
     * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsBulkCertificateResponse} and HTTP response
     */
    getTlsBulkCertWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'certificate_id' is set.
      if (options['certificate_id'] === undefined || options['certificate_id'] === null) {
        throw new Error("Missing the required parameter 'certificate_id'.");
      }

      let pathParams = {
        'certificate_id': options['certificate_id']
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
      let returnType = TlsBulkCertificateResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/bulk/certificates/{certificate_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve a single certificate.
     * @param {Object} options
     * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsBulkCertificateResponse}
     */
    getTlsBulkCert(options = {}) {
      return this.getTlsBulkCertWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all certificates.
     * @param {Object} options
     * @param {String} [options.filter_tls_domain_id] - Filter certificates by their matching, fully-qualified domain name.
     * @param {String} [options.filter_not_before] - Filter the returned certificates by not_before date in UTC.  Accepts parameters: lt, lte, gt, gte (e.g., filter[not_before][gte]=2020-05-05). 
     * @param {String} [options.filter_not_after] - Filter the returned certificates by expiry date in UTC.  Accepts parameters: lt, lte, gt, gte (e.g., filter[not_after][lte]=2020-05-05). 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsBulkCertificatesResponse} and HTTP response
     */
    listTlsBulkCertsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[tls_domain.id]': options['filter_tls_domain_id'],
        'filter[not_before]': options['filter_not_before'],
        'filter[not_after]': options['filter_not_after'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'sort': options['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = TlsBulkCertificatesResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/bulk/certificates', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all certificates.
     * @param {Object} options
     * @param {String} [options.filter_tls_domain_id] - Filter certificates by their matching, fully-qualified domain name.
     * @param {String} [options.filter_not_before] - Filter the returned certificates by not_before date in UTC.  Accepts parameters: lt, lte, gt, gte (e.g., filter[not_before][gte]=2020-05-05). 
     * @param {String} [options.filter_not_after] - Filter the returned certificates by expiry date in UTC.  Accepts parameters: lt, lte, gt, gte (e.g., filter[not_after][lte]=2020-05-05). 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsBulkCertificatesResponse}
     */
    listTlsBulkCerts(options = {}) {
      return this.listTlsBulkCertsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Replace a certificate with a newly reissued certificate. By using this endpoint, the original certificate will cease to be used for future TLS handshakes. Thus, only SAN entries that appear in the replacement certificate will become TLS enabled. Any SAN entries that are missing in the replacement certificate will become disabled.
     * @param {Object} options
     * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
     * @param {module:model/TlsBulkCertificate} [options.tls_bulk_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsBulkCertificateResponse} and HTTP response
     */
    updateBulkTlsCertWithHttpInfo(options = {}) {
      let postBody = options['tls_bulk_certificate'];
      // Verify the required parameter 'certificate_id' is set.
      if (options['certificate_id'] === undefined || options['certificate_id'] === null) {
        throw new Error("Missing the required parameter 'certificate_id'.");
      }

      let pathParams = {
        'certificate_id': options['certificate_id']
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
      let returnType = TlsBulkCertificateResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/bulk/certificates/{certificate_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Replace a certificate with a newly reissued certificate. By using this endpoint, the original certificate will cease to be used for future TLS handshakes. Thus, only SAN entries that appear in the replacement certificate will become TLS enabled. Any SAN entries that are missing in the replacement certificate will become disabled.
     * @param {Object} options
     * @param {String} options.certificate_id - Alphanumeric string identifying a TLS bulk certificate.
     * @param {module:model/TlsBulkCertificate} [options.tls_bulk_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsBulkCertificateResponse}
     */
    updateBulkTlsCert(options = {}) {
      return this.updateBulkTlsCertWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Upload a new certificate. TLS domains are automatically enabled upon certificate creation. If a domain is already enabled on a previously uploaded certificate, that domain will be updated to use the new certificate for all future TLS handshake requests.
     * @param {Object} options
     * @param {module:model/TlsBulkCertificate} [options.tls_bulk_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsBulkCertificateResponse} and HTTP response
     */
    uploadTlsBulkCertWithHttpInfo(options = {}) {
      let postBody = options['tls_bulk_certificate'];

      let pathParams = {
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
      let returnType = TlsBulkCertificateResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/bulk/certificates', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Upload a new certificate. TLS domains are automatically enabled upon certificate creation. If a domain is already enabled on a previously uploaded certificate, that domain will be updated to use the new certificate for all future TLS handshake requests.
     * @param {Object} options
     * @param {module:model/TlsBulkCertificate} [options.tls_bulk_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsBulkCertificateResponse}
     */
    uploadTlsBulkCert(options = {}) {
      return this.uploadTlsBulkCertWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
