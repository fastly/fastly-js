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
import CustomerResponse from '../model/CustomerResponse';
import InlineResponse200 from '../model/InlineResponse200';
import SchemasUserResponse from '../model/SchemasUserResponse';

/**
* Customer service.
* @module api/CustomerApi
* @version 6.1.0
*/
export default class CustomerApi {

    /**
    * Constructs a new CustomerApi. 
    * @alias module:api/CustomerApi
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
     * Delete a customer.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteCustomerWithHttpInfo(options = {}) {
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
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/customer/{customer_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a customer.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteCustomer(options = {}) {
      return this.deleteCustomerWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific customer.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerResponse} and HTTP response
     */
    getCustomerWithHttpInfo(options = {}) {
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
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CustomerResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/customer/{customer_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific customer.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerResponse}
     */
    getCustomer(options = {}) {
      return this.getCustomerWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the logged in customer.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerResponse} and HTTP response
     */
    getLoggedInCustomerWithHttpInfo(options = {}) {
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
      let returnType = CustomerResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/current_customer', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get the logged in customer.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerResponse}
     */
    getLoggedInCustomer(options = {}) {
      return this.getLoggedInCustomerWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all users from a specified customer id.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SchemasUserResponse>} and HTTP response
     */
    listUsersWithHttpInfo(options = {}) {
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
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SchemasUserResponse];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/customer/{customer_id}/users', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all users from a specified customer id.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SchemasUserResponse>}
     */
    listUsers(options = {}) {
      return this.listUsersWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a customer.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @param {String} [options.billing_contact_id] - The alphanumeric string representing the primary billing contact.
     * @param {module:model/String} [options.billing_network_type] - Customer's current network revenue type.
     * @param {String} [options.billing_ref] - Used for adding purchased orders to customer's account.
     * @param {Boolean} [options.can_configure_wordpress] - Whether this customer can view or edit wordpress.
     * @param {Boolean} [options.can_reset_passwords] - Whether this customer can reset passwords.
     * @param {Boolean} [options.can_upload_vcl] - Whether this customer can upload VCL.
     * @param {Boolean} [options.force_2fa] - Specifies whether 2FA is forced or not forced on the customer account. Logs out non-2FA users once 2FA is force enabled.
     * @param {Boolean} [options.force_sso] - Specifies whether SSO is forced or not forced on the customer account.
     * @param {Boolean} [options.has_account_panel] - Specifies whether the account has access or does not have access to the account panel.
     * @param {Boolean} [options.has_improved_events] - Specifies whether the account has access or does not have access to the improved events.
     * @param {Boolean} [options.has_improved_ssl_config] - Whether this customer can view or edit the SSL config.
     * @param {Boolean} [options.has_openstack_logging] - Specifies whether the account has enabled or not enabled openstack logging.
     * @param {Boolean} [options.has_pci] - Specifies whether the account can edit PCI for a service.
     * @param {Boolean} [options.has_pci_passwords] - Specifies whether PCI passwords are required for the account.
     * @param {String} [options.ip_whitelist] - The range of IP addresses authorized to access the customer account.
     * @param {String} [options.legal_contact_id] - The alphanumeric string identifying the account's legal contact.
     * @param {String} [options.name] - The name of the customer, generally the company name.
     * @param {String} [options.owner_id] - The alphanumeric string identifying the account owner.
     * @param {String} [options.phone_number] - The phone number associated with the account.
     * @param {String} [options.postal_address] - The postal address associated with the account.
     * @param {String} [options.pricing_plan] - The pricing plan this customer is under.
     * @param {String} [options.pricing_plan_id] - The alphanumeric string identifying the pricing plan.
     * @param {String} [options.security_contact_id] - The alphanumeric string identifying the account's security contact.
     * @param {String} [options.technical_contact_id] - The alphanumeric string identifying the account's technical contact.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerResponse} and HTTP response
     */
    updateCustomerWithHttpInfo(options = {}) {
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
      };
      let headerParams = {
      };
      let formParams = {
        'billing_contact_id': options['billing_contact_id'],
        'billing_network_type': options['billing_network_type'],
        'billing_ref': options['billing_ref'],
        'can_configure_wordpress': options['can_configure_wordpress'],
        'can_reset_passwords': options['can_reset_passwords'],
        'can_upload_vcl': options['can_upload_vcl'],
        'force_2fa': options['force_2fa'],
        'force_sso': options['force_sso'],
        'has_account_panel': options['has_account_panel'],
        'has_improved_events': options['has_improved_events'],
        'has_improved_ssl_config': options['has_improved_ssl_config'],
        'has_openstack_logging': options['has_openstack_logging'],
        'has_pci': options['has_pci'],
        'has_pci_passwords': options['has_pci_passwords'],
        'ip_whitelist': options['ip_whitelist'],
        'legal_contact_id': options['legal_contact_id'],
        'name': options['name'],
        'owner_id': options['owner_id'],
        'phone_number': options['phone_number'],
        'postal_address': options['postal_address'],
        'pricing_plan': options['pricing_plan'],
        'pricing_plan_id': options['pricing_plan_id'],
        'security_contact_id': options['security_contact_id'],
        'technical_contact_id': options['technical_contact_id']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = CustomerResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/customer/{customer_id}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a customer.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @param {String} [options.billing_contact_id] - The alphanumeric string representing the primary billing contact.
     * @param {module:model/String} [options.billing_network_type] - Customer's current network revenue type.
     * @param {String} [options.billing_ref] - Used for adding purchased orders to customer's account.
     * @param {Boolean} [options.can_configure_wordpress] - Whether this customer can view or edit wordpress.
     * @param {Boolean} [options.can_reset_passwords] - Whether this customer can reset passwords.
     * @param {Boolean} [options.can_upload_vcl] - Whether this customer can upload VCL.
     * @param {Boolean} [options.force_2fa] - Specifies whether 2FA is forced or not forced on the customer account. Logs out non-2FA users once 2FA is force enabled.
     * @param {Boolean} [options.force_sso] - Specifies whether SSO is forced or not forced on the customer account.
     * @param {Boolean} [options.has_account_panel] - Specifies whether the account has access or does not have access to the account panel.
     * @param {Boolean} [options.has_improved_events] - Specifies whether the account has access or does not have access to the improved events.
     * @param {Boolean} [options.has_improved_ssl_config] - Whether this customer can view or edit the SSL config.
     * @param {Boolean} [options.has_openstack_logging] - Specifies whether the account has enabled or not enabled openstack logging.
     * @param {Boolean} [options.has_pci] - Specifies whether the account can edit PCI for a service.
     * @param {Boolean} [options.has_pci_passwords] - Specifies whether PCI passwords are required for the account.
     * @param {String} [options.ip_whitelist] - The range of IP addresses authorized to access the customer account.
     * @param {String} [options.legal_contact_id] - The alphanumeric string identifying the account's legal contact.
     * @param {String} [options.name] - The name of the customer, generally the company name.
     * @param {String} [options.owner_id] - The alphanumeric string identifying the account owner.
     * @param {String} [options.phone_number] - The phone number associated with the account.
     * @param {String} [options.postal_address] - The postal address associated with the account.
     * @param {String} [options.pricing_plan] - The pricing plan this customer is under.
     * @param {String} [options.pricing_plan_id] - The alphanumeric string identifying the pricing plan.
     * @param {String} [options.security_contact_id] - The alphanumeric string identifying the account's security contact.
     * @param {String} [options.technical_contact_id] - The alphanumeric string identifying the account's technical contact.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerResponse}
     */
    updateCustomer(options = {}) {
      return this.updateCustomerWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
