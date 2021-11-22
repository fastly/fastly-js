"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomerResponse = _interopRequireDefault(require("../model/CustomerResponse"));

var _SchemasUserResponse = _interopRequireDefault(require("../model/SchemasUserResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Customer service.
* @module api/CustomerApi
* @version 3.0.0-alpha1
*/
var CustomerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CustomerApi. 
  * @alias module:api/CustomerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CustomerApi(apiClient) {
    _classCallCheck(this, CustomerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Delete a customer.
   * @param {Object} options
   * @param {String} options.customer_id - Alphanumeric string identifying the customer.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(CustomerApi, [{
    key: "deleteCustomerWithHttpInfo",
    value: function deleteCustomerWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'customer_id' is set.

      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }

      var pathParams = {
        'customer_id': options['customer_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/customer/{customer_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a customer.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteCustomer",
    value: function deleteCustomer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteCustomerWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a specific customer.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerResponse} and HTTP response
     */

  }, {
    key: "getCustomerWithHttpInfo",
    value: function getCustomerWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'customer_id' is set.

      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }

      var pathParams = {
        'customer_id': options['customer_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomerResponse["default"];
      return this.apiClient.callApi('/customer/{customer_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a specific customer.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerResponse}
     */

  }, {
    key: "getCustomer",
    value: function getCustomer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getCustomerWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the logged in customer.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerResponse} and HTTP response
     */

  }, {
    key: "getLoggedInCustomerWithHttpInfo",
    value: function getLoggedInCustomerWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomerResponse["default"];
      return this.apiClient.callApi('/current_customer', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the logged in customer.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerResponse}
     */

  }, {
    key: "getLoggedInCustomer",
    value: function getLoggedInCustomer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLoggedInCustomerWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all users from a specified customer id.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SchemasUserResponse>} and HTTP response
     */

  }, {
    key: "listUsersWithHttpInfo",
    value: function listUsersWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'customer_id' is set.

      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }

      var pathParams = {
        'customer_id': options['customer_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_SchemasUserResponse["default"]];
      return this.apiClient.callApi('/customer/{customer_id}/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all users from a specified customer id.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SchemasUserResponse>}
     */

  }, {
    key: "listUsers",
    value: function listUsers() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listUsersWithHttpInfo(options).then(function (response_and_data) {
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

  }, {
    key: "updateCustomerWithHttpInfo",
    value: function updateCustomerWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'customer_id' is set.

      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }

      var pathParams = {
        'customer_id': options['customer_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
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
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _CustomerResponse["default"];
      return this.apiClient.callApi('/customer/{customer_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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

  }, {
    key: "updateCustomer",
    value: function updateCustomer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateCustomerWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CustomerApi;
}();

exports["default"] = CustomerApi;