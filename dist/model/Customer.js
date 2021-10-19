"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Customer model module.
 * @module model/Customer
 * @version 3.0.0-alpha1
 */
var Customer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Customer</code>.
   * @alias module:model/Customer
   */
  function Customer() {
    _classCallCheck(this, Customer);

    Customer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Customer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Customer} obj Optional instance to populate.
     * @return {module:model/Customer} The populated <code>Customer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Customer();

        if (data.hasOwnProperty('billing_contact_id')) {
          obj['billing_contact_id'] = _ApiClient["default"].convertToType(data['billing_contact_id'], 'String');
        }

        if (data.hasOwnProperty('billing_network_type')) {
          obj['billing_network_type'] = _ApiClient["default"].convertToType(data['billing_network_type'], 'String');
        }

        if (data.hasOwnProperty('billing_ref')) {
          obj['billing_ref'] = _ApiClient["default"].convertToType(data['billing_ref'], 'String');
        }

        if (data.hasOwnProperty('can_configure_wordpress')) {
          obj['can_configure_wordpress'] = _ApiClient["default"].convertToType(data['can_configure_wordpress'], 'Boolean');
        }

        if (data.hasOwnProperty('can_reset_passwords')) {
          obj['can_reset_passwords'] = _ApiClient["default"].convertToType(data['can_reset_passwords'], 'Boolean');
        }

        if (data.hasOwnProperty('can_upload_vcl')) {
          obj['can_upload_vcl'] = _ApiClient["default"].convertToType(data['can_upload_vcl'], 'Boolean');
        }

        if (data.hasOwnProperty('force_2fa')) {
          obj['force_2fa'] = _ApiClient["default"].convertToType(data['force_2fa'], 'Boolean');
        }

        if (data.hasOwnProperty('force_sso')) {
          obj['force_sso'] = _ApiClient["default"].convertToType(data['force_sso'], 'Boolean');
        }

        if (data.hasOwnProperty('has_account_panel')) {
          obj['has_account_panel'] = _ApiClient["default"].convertToType(data['has_account_panel'], 'Boolean');
        }

        if (data.hasOwnProperty('has_improved_events')) {
          obj['has_improved_events'] = _ApiClient["default"].convertToType(data['has_improved_events'], 'Boolean');
        }

        if (data.hasOwnProperty('has_improved_ssl_config')) {
          obj['has_improved_ssl_config'] = _ApiClient["default"].convertToType(data['has_improved_ssl_config'], 'Boolean');
        }

        if (data.hasOwnProperty('has_openstack_logging')) {
          obj['has_openstack_logging'] = _ApiClient["default"].convertToType(data['has_openstack_logging'], 'Boolean');
        }

        if (data.hasOwnProperty('has_pci')) {
          obj['has_pci'] = _ApiClient["default"].convertToType(data['has_pci'], 'Boolean');
        }

        if (data.hasOwnProperty('has_pci_passwords')) {
          obj['has_pci_passwords'] = _ApiClient["default"].convertToType(data['has_pci_passwords'], 'Boolean');
        }

        if (data.hasOwnProperty('ip_whitelist')) {
          obj['ip_whitelist'] = _ApiClient["default"].convertToType(data['ip_whitelist'], 'String');
        }

        if (data.hasOwnProperty('legal_contact_id')) {
          obj['legal_contact_id'] = _ApiClient["default"].convertToType(data['legal_contact_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner_id')) {
          obj['owner_id'] = _ApiClient["default"].convertToType(data['owner_id'], 'String');
        }

        if (data.hasOwnProperty('phone_number')) {
          obj['phone_number'] = _ApiClient["default"].convertToType(data['phone_number'], 'String');
        }

        if (data.hasOwnProperty('postal_address')) {
          obj['postal_address'] = _ApiClient["default"].convertToType(data['postal_address'], 'String');
        }

        if (data.hasOwnProperty('pricing_plan')) {
          obj['pricing_plan'] = _ApiClient["default"].convertToType(data['pricing_plan'], 'String');
        }

        if (data.hasOwnProperty('pricing_plan_id')) {
          obj['pricing_plan_id'] = _ApiClient["default"].convertToType(data['pricing_plan_id'], 'String');
        }

        if (data.hasOwnProperty('security_contact_id')) {
          obj['security_contact_id'] = _ApiClient["default"].convertToType(data['security_contact_id'], 'String');
        }

        if (data.hasOwnProperty('technical_contact_id')) {
          obj['technical_contact_id'] = _ApiClient["default"].convertToType(data['technical_contact_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Customer;
}();
/**
 * The alphanumeric string representing the primary billing contact.
 * @member {String} billing_contact_id
 */


Customer.prototype['billing_contact_id'] = undefined;
/**
 * Customer's current network revenue type.
 * @member {module:model/Customer.BillingNetworkTypeEnum} billing_network_type
 */

Customer.prototype['billing_network_type'] = undefined;
/**
 * Used for adding purchased orders to customer's account.
 * @member {String} billing_ref
 */

Customer.prototype['billing_ref'] = undefined;
/**
 * Whether this customer can view or edit wordpress.
 * @member {Boolean} can_configure_wordpress
 */

Customer.prototype['can_configure_wordpress'] = undefined;
/**
 * Whether this customer can reset passwords.
 * @member {Boolean} can_reset_passwords
 */

Customer.prototype['can_reset_passwords'] = undefined;
/**
 * Whether this customer can upload VCL.
 * @member {Boolean} can_upload_vcl
 */

Customer.prototype['can_upload_vcl'] = undefined;
/**
 * Specifies whether 2FA is forced or not forced on the customer account. Logs out non-2FA users once 2FA is force enabled.
 * @member {Boolean} force_2fa
 */

Customer.prototype['force_2fa'] = undefined;
/**
 * Specifies whether SSO is forced or not forced on the customer account.
 * @member {Boolean} force_sso
 */

Customer.prototype['force_sso'] = undefined;
/**
 * Specifies whether the account has access or does not have access to the account panel.
 * @member {Boolean} has_account_panel
 */

Customer.prototype['has_account_panel'] = undefined;
/**
 * Specifies whether the account has access or does not have access to the improved events.
 * @member {Boolean} has_improved_events
 */

Customer.prototype['has_improved_events'] = undefined;
/**
 * Whether this customer can view or edit the SSL config.
 * @member {Boolean} has_improved_ssl_config
 */

Customer.prototype['has_improved_ssl_config'] = undefined;
/**
 * Specifies whether the account has enabled or not enabled openstack logging.
 * @member {Boolean} has_openstack_logging
 */

Customer.prototype['has_openstack_logging'] = undefined;
/**
 * Specifies whether the account can edit PCI for a service.
 * @member {Boolean} has_pci
 */

Customer.prototype['has_pci'] = undefined;
/**
 * Specifies whether PCI passwords are required for the account.
 * @member {Boolean} has_pci_passwords
 */

Customer.prototype['has_pci_passwords'] = undefined;
/**
 * The range of IP addresses authorized to access the customer account.
 * @member {String} ip_whitelist
 */

Customer.prototype['ip_whitelist'] = undefined;
/**
 * The alphanumeric string identifying the account's legal contact.
 * @member {String} legal_contact_id
 */

Customer.prototype['legal_contact_id'] = undefined;
/**
 * The name of the customer, generally the company name.
 * @member {String} name
 */

Customer.prototype['name'] = undefined;
/**
 * The alphanumeric string identifying the account owner.
 * @member {String} owner_id
 */

Customer.prototype['owner_id'] = undefined;
/**
 * The phone number associated with the account.
 * @member {String} phone_number
 */

Customer.prototype['phone_number'] = undefined;
/**
 * The postal address associated with the account.
 * @member {String} postal_address
 */

Customer.prototype['postal_address'] = undefined;
/**
 * The pricing plan this customer is under.
 * @member {String} pricing_plan
 */

Customer.prototype['pricing_plan'] = undefined;
/**
 * The alphanumeric string identifying the pricing plan.
 * @member {String} pricing_plan_id
 */

Customer.prototype['pricing_plan_id'] = undefined;
/**
 * The alphanumeric string identifying the account's security contact.
 * @member {String} security_contact_id
 */

Customer.prototype['security_contact_id'] = undefined;
/**
 * The alphanumeric string identifying the account's technical contact.
 * @member {String} technical_contact_id
 */

Customer.prototype['technical_contact_id'] = undefined;
/**
 * Allowed values for the <code>billing_network_type</code> property.
 * @enum {String}
 * @readonly
 */

Customer['BillingNetworkTypeEnum'] = {
  /**
   * value: "public"
   * @const
   */
  "public": "public",

  /**
   * value: "private"
   * @const
   */
  "private": "private"
};
var _default = Customer;
exports["default"] = _default;