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
import BillingEstimateResponse from '../model/BillingEstimateResponse';
import BillingResponse from '../model/BillingResponse';

/**
* Billing service.
* @module api/BillingApi
* @version 4.1.0
*/
export default class BillingApi {

    /**
    * Constructs a new BillingApi. 
    * @alias module:api/BillingApi
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
     * Get the invoice for a given year and month. Can be any month from when the Customer was created to the current month.
     * @param {Object} options
     * @param {String} options.month - 2-digit month.
     * @param {String} options.year - 4-digit year.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingResponse} and HTTP response
     */
    getInvoiceWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'month' is set.
      if (options['month'] === undefined || options['month'] === null) {
        throw new Error("Missing the required parameter 'month'.");
      }
      // Verify the required parameter 'year' is set.
      if (options['year'] === undefined || options['year'] === null) {
        throw new Error("Missing the required parameter 'year'.");
      }

      let pathParams = {
        'month': options['month'],
        'year': options['year']
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
      let accepts = ['application/json', 'text/csv', 'application/pdf'];
      let returnType = BillingResponse;
      return this.apiClient.callApi(
        '/billing/v2/year/{year}/month/{month}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the invoice for a given year and month. Can be any month from when the Customer was created to the current month.
     * @param {Object} options
     * @param {String} options.month - 2-digit month.
     * @param {String} options.year - 4-digit year.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingResponse}
     */
    getInvoice(options = {}) {
      return this.getInvoiceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the invoice for the given invoice_id.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @param {String} options.invoice_id - Alphanumeric string identifying the invoice.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingResponse} and HTTP response
     */
    getInvoiceByIdWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'customer_id' is set.
      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }
      // Verify the required parameter 'invoice_id' is set.
      if (options['invoice_id'] === undefined || options['invoice_id'] === null) {
        throw new Error("Missing the required parameter 'invoice_id'.");
      }

      let pathParams = {
        'customer_id': options['customer_id'],
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
      let accepts = ['application/json', 'text/csv', 'application/pdf'];
      let returnType = BillingResponse;
      return this.apiClient.callApi(
        '/billing/v2/account_customers/{customer_id}/invoices/{invoice_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the invoice for the given invoice_id.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @param {String} options.invoice_id - Alphanumeric string identifying the invoice.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingResponse}
     */
    getInvoiceById(options = {}) {
      return this.getInvoiceByIdWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the current month-to-date estimate. This endpoint has two different responses. Under normal circumstances, it generally takes less than 5 seconds to generate but in certain cases can take up to 60 seconds. Once generated the month-to-date estimate is cached for 4 hours, and is available the next request will return the JSON representation of the month-to-date estimate. While a report is being generated in the background, this endpoint will return a `202 Accepted` response. The full format of which can be found in detail in our [billing calculation guide](https://docs.fastly.com/en/guides/how-we-calculate-your-bill). There are certain accounts for which we are unable to generate a month-to-date estimate. For example, accounts who have parent-pay are unable to generate an MTD estimate. The parent accounts are able to generate a month-to-date estimate but that estimate will not include the child accounts amounts at this time.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @param {String} [options.month] - 2-digit month.
     * @param {String} [options.year] - 4-digit year.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingEstimateResponse} and HTTP response
     */
    getInvoiceMtdWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'customer_id' is set.
      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }

      let pathParams = {
        'customer_id': options['customer_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'month': options['month'],
        'year': options['year']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BillingEstimateResponse;
      return this.apiClient.callApi(
        '/billing/v2/account_customers/{customer_id}/mtd_invoice', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the current month-to-date estimate. This endpoint has two different responses. Under normal circumstances, it generally takes less than 5 seconds to generate but in certain cases can take up to 60 seconds. Once generated the month-to-date estimate is cached for 4 hours, and is available the next request will return the JSON representation of the month-to-date estimate. While a report is being generated in the background, this endpoint will return a `202 Accepted` response. The full format of which can be found in detail in our [billing calculation guide](https://docs.fastly.com/en/guides/how-we-calculate-your-bill). There are certain accounts for which we are unable to generate a month-to-date estimate. For example, accounts who have parent-pay are unable to generate an MTD estimate. The parent accounts are able to generate a month-to-date estimate but that estimate will not include the child accounts amounts at this time.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @param {String} [options.month] - 2-digit month.
     * @param {String} [options.year] - 4-digit year.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingEstimateResponse}
     */
    getInvoiceMtd(options = {}) {
      return this.getInvoiceMtdWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
