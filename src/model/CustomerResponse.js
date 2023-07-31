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

import ApiClient from '../ApiClient';
import Customer from './Customer';
import CustomerResponseAllOf from './CustomerResponseAllOf';
import Timestamps from './Timestamps';

/**
 * The CustomerResponse model module.
 * @module model/CustomerResponse
 * @version 6.0.0
 */
class CustomerResponse {
    /**
     * Constructs a new <code>CustomerResponse</code>.
     * @alias module:model/CustomerResponse
     * @implements module:model/Customer
     * @implements module:model/Timestamps
     * @implements module:model/CustomerResponseAllOf
     */
    constructor() { 
        Customer.initialize(this);Timestamps.initialize(this);CustomerResponseAllOf.initialize(this);
        CustomerResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerResponse} obj Optional instance to populate.
     * @return {module:model/CustomerResponse} The populated <code>CustomerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerResponse();
            Customer.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            CustomerResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('billing_contact_id')) {
                obj['billing_contact_id'] = ApiClient.convertToType(data['billing_contact_id'], 'String');
            }
            if (data.hasOwnProperty('billing_network_type')) {
                obj['billing_network_type'] = ApiClient.convertToType(data['billing_network_type'], 'String');
            }
            if (data.hasOwnProperty('billing_ref')) {
                obj['billing_ref'] = ApiClient.convertToType(data['billing_ref'], 'String');
            }
            if (data.hasOwnProperty('can_configure_wordpress')) {
                obj['can_configure_wordpress'] = ApiClient.convertToType(data['can_configure_wordpress'], 'Boolean');
            }
            if (data.hasOwnProperty('can_reset_passwords')) {
                obj['can_reset_passwords'] = ApiClient.convertToType(data['can_reset_passwords'], 'Boolean');
            }
            if (data.hasOwnProperty('can_upload_vcl')) {
                obj['can_upload_vcl'] = ApiClient.convertToType(data['can_upload_vcl'], 'Boolean');
            }
            if (data.hasOwnProperty('force_2fa')) {
                obj['force_2fa'] = ApiClient.convertToType(data['force_2fa'], 'Boolean');
            }
            if (data.hasOwnProperty('force_sso')) {
                obj['force_sso'] = ApiClient.convertToType(data['force_sso'], 'Boolean');
            }
            if (data.hasOwnProperty('has_account_panel')) {
                obj['has_account_panel'] = ApiClient.convertToType(data['has_account_panel'], 'Boolean');
            }
            if (data.hasOwnProperty('has_improved_events')) {
                obj['has_improved_events'] = ApiClient.convertToType(data['has_improved_events'], 'Boolean');
            }
            if (data.hasOwnProperty('has_improved_ssl_config')) {
                obj['has_improved_ssl_config'] = ApiClient.convertToType(data['has_improved_ssl_config'], 'Boolean');
            }
            if (data.hasOwnProperty('has_openstack_logging')) {
                obj['has_openstack_logging'] = ApiClient.convertToType(data['has_openstack_logging'], 'Boolean');
            }
            if (data.hasOwnProperty('has_pci')) {
                obj['has_pci'] = ApiClient.convertToType(data['has_pci'], 'Boolean');
            }
            if (data.hasOwnProperty('has_pci_passwords')) {
                obj['has_pci_passwords'] = ApiClient.convertToType(data['has_pci_passwords'], 'Boolean');
            }
            if (data.hasOwnProperty('ip_whitelist')) {
                obj['ip_whitelist'] = ApiClient.convertToType(data['ip_whitelist'], 'String');
            }
            if (data.hasOwnProperty('legal_contact_id')) {
                obj['legal_contact_id'] = ApiClient.convertToType(data['legal_contact_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('postal_address')) {
                obj['postal_address'] = ApiClient.convertToType(data['postal_address'], 'String');
            }
            if (data.hasOwnProperty('pricing_plan')) {
                obj['pricing_plan'] = ApiClient.convertToType(data['pricing_plan'], 'String');
            }
            if (data.hasOwnProperty('pricing_plan_id')) {
                obj['pricing_plan_id'] = ApiClient.convertToType(data['pricing_plan_id'], 'String');
            }
            if (data.hasOwnProperty('security_contact_id')) {
                obj['security_contact_id'] = ApiClient.convertToType(data['security_contact_id'], 'String');
            }
            if (data.hasOwnProperty('technical_contact_id')) {
                obj['technical_contact_id'] = ApiClient.convertToType(data['technical_contact_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The alphanumeric string representing the primary billing contact.
 * @member {String} billing_contact_id
 */
CustomerResponse.prototype['billing_contact_id'] = undefined;

/**
 * Customer's current network revenue type.
 * @member {module:model/CustomerResponse.BillingNetworkTypeEnum} billing_network_type
 */
CustomerResponse.prototype['billing_network_type'] = undefined;

/**
 * Used for adding purchased orders to customer's account.
 * @member {String} billing_ref
 */
CustomerResponse.prototype['billing_ref'] = undefined;

/**
 * Whether this customer can view or edit wordpress.
 * @member {Boolean} can_configure_wordpress
 */
CustomerResponse.prototype['can_configure_wordpress'] = undefined;

/**
 * Whether this customer can reset passwords.
 * @member {Boolean} can_reset_passwords
 */
CustomerResponse.prototype['can_reset_passwords'] = undefined;

/**
 * Whether this customer can upload VCL.
 * @member {Boolean} can_upload_vcl
 */
CustomerResponse.prototype['can_upload_vcl'] = undefined;

/**
 * Specifies whether 2FA is forced or not forced on the customer account. Logs out non-2FA users once 2FA is force enabled.
 * @member {Boolean} force_2fa
 */
CustomerResponse.prototype['force_2fa'] = undefined;

/**
 * Specifies whether SSO is forced or not forced on the customer account.
 * @member {Boolean} force_sso
 */
CustomerResponse.prototype['force_sso'] = undefined;

/**
 * Specifies whether the account has access or does not have access to the account panel.
 * @member {Boolean} has_account_panel
 */
CustomerResponse.prototype['has_account_panel'] = undefined;

/**
 * Specifies whether the account has access or does not have access to the improved events.
 * @member {Boolean} has_improved_events
 */
CustomerResponse.prototype['has_improved_events'] = undefined;

/**
 * Whether this customer can view or edit the SSL config.
 * @member {Boolean} has_improved_ssl_config
 */
CustomerResponse.prototype['has_improved_ssl_config'] = undefined;

/**
 * Specifies whether the account has enabled or not enabled openstack logging.
 * @member {Boolean} has_openstack_logging
 */
CustomerResponse.prototype['has_openstack_logging'] = undefined;

/**
 * Specifies whether the account can edit PCI for a service.
 * @member {Boolean} has_pci
 */
CustomerResponse.prototype['has_pci'] = undefined;

/**
 * Specifies whether PCI passwords are required for the account.
 * @member {Boolean} has_pci_passwords
 */
CustomerResponse.prototype['has_pci_passwords'] = undefined;

/**
 * The range of IP addresses authorized to access the customer account.
 * @member {String} ip_whitelist
 */
CustomerResponse.prototype['ip_whitelist'] = undefined;

/**
 * The alphanumeric string identifying the account's legal contact.
 * @member {String} legal_contact_id
 */
CustomerResponse.prototype['legal_contact_id'] = undefined;

/**
 * The name of the customer, generally the company name.
 * @member {String} name
 */
CustomerResponse.prototype['name'] = undefined;

/**
 * The alphanumeric string identifying the account owner.
 * @member {String} owner_id
 */
CustomerResponse.prototype['owner_id'] = undefined;

/**
 * The phone number associated with the account.
 * @member {String} phone_number
 */
CustomerResponse.prototype['phone_number'] = undefined;

/**
 * The postal address associated with the account.
 * @member {String} postal_address
 */
CustomerResponse.prototype['postal_address'] = undefined;

/**
 * The pricing plan this customer is under.
 * @member {String} pricing_plan
 */
CustomerResponse.prototype['pricing_plan'] = undefined;

/**
 * The alphanumeric string identifying the pricing plan.
 * @member {String} pricing_plan_id
 */
CustomerResponse.prototype['pricing_plan_id'] = undefined;

/**
 * The alphanumeric string identifying the account's security contact.
 * @member {String} security_contact_id
 */
CustomerResponse.prototype['security_contact_id'] = undefined;

/**
 * The alphanumeric string identifying the account's technical contact.
 * @member {String} technical_contact_id
 */
CustomerResponse.prototype['technical_contact_id'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
CustomerResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
CustomerResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
CustomerResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} id
 */
CustomerResponse.prototype['id'] = undefined;


// Implement Customer interface:
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
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement CustomerResponseAllOf interface:
/**
 * @member {String} id
 */
CustomerResponseAllOf.prototype['id'] = undefined;



/**
 * Allowed values for the <code>billing_network_type</code> property.
 * @enum {String}
 * @readonly
 */
CustomerResponse['BillingNetworkTypeEnum'] = {

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



export default CustomerResponse;

