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
import AsyncResponse from '../model/AsyncResponse';
import EomInvoiceResponse from '../model/EomInvoiceResponse';
import Error from '../model/Error';
import ListEomInvoicesResponse from '../model/ListEomInvoicesResponse';
import MtdInvoiceResponse from '../model/MtdInvoiceResponse';

/**
* BillingInvoices service.
* @module api/BillingInvoicesApi
* @version 15.0.0-beta.2
*/
export default class BillingInvoicesApi {

    /**
    * Constructs a new BillingInvoicesApi. 
    * @alias module:api/BillingInvoicesApi
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
     * Returns invoice associated with the invoice id.
     * @param {Object} options
     * @param {Number} options.invoice_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EomInvoiceResponse} and HTTP response
     */
    getInvoiceByInvoiceIdWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'invoice_id' is set.
      if (options['invoice_id'] === undefined || options['invoice_id'] === null) {
        throw new Error("Missing the required parameter 'invoice_id'.");
      }

      let pathParams = {
        'invoice_id': options['invoice_id']
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
      let accepts = ['application/json'];
      let returnType = EomInvoiceResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/billing/v3/invoices/{invoice_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Returns invoice associated with the invoice id.
     * @param {Object} options
     * @param {Number} options.invoice_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EomInvoiceResponse}
     */
    getInvoiceByInvoiceId(options = {}) {
      return this.getInvoiceByInvoiceIdWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Returns month-to-date invoice for the current month.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MtdInvoiceResponse} and HTTP response
     */
    getMonthToDateInvoiceWithHttpInfo(options = {}) {
      let postBody = null;

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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MtdInvoiceResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/billing/v3/invoices/month-to-date', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Returns month-to-date invoice for the current month.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MtdInvoiceResponse}
     */
    getMonthToDateInvoice(options = {}) {
      return this.getMonthToDateInvoiceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Returns the list of invoices, sorted by billing start date (newest to oldest).
     * @param {Object} options
     * @param {String} [options.billing_start_date]
     * @param {String} [options.billing_end_date]
     * @param {String} [options.limit='100'] - Number of results per page. The maximum is 200.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListEomInvoicesResponse} and HTTP response
     */
    listInvoicesWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'billing_start_date': options['billing_start_date'],
        'billing_end_date': options['billing_end_date'],
        'limit': options['limit'],
        'cursor': options['cursor']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListEomInvoicesResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/billing/v3/invoices', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Returns the list of invoices, sorted by billing start date (newest to oldest).
     * @param {Object} options
     * @param {String} [options.billing_start_date]
     * @param {String} [options.billing_end_date]
     * @param {String} [options.limit='100'] - Number of results per page. The maximum is 200.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListEomInvoicesResponse}
     */
    listInvoices(options = {}) {
      return this.listInvoicesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
