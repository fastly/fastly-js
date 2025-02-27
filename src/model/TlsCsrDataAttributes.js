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

import ApiClient from '../ApiClient';

/**
 * The TlsCsrDataAttributes model module.
 * @module model/TlsCsrDataAttributes
 * @version 9.0.0
 */
class TlsCsrDataAttributes {
    /**
     * Constructs a new <code>TlsCsrDataAttributes</code>.
     * @alias module:model/TlsCsrDataAttributes
     * @param sans {Array.<String>} Subject Alternate Names - An array of one or more fully qualified domain names or public IP addresses to be secured by this certificate. Required.
     */
    constructor(sans) { 
        
        TlsCsrDataAttributes.initialize(this, sans);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sans) { 
        obj['sans'] = sans;
    }

    /**
     * Constructs a <code>TlsCsrDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCsrDataAttributes} obj Optional instance to populate.
     * @return {module:model/TlsCsrDataAttributes} The populated <code>TlsCsrDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsCsrDataAttributes();

            if (data.hasOwnProperty('sans')) {
                obj['sans'] = ApiClient.convertToType(data['sans'], ['String']);
            }
            if (data.hasOwnProperty('common_name')) {
                obj['common_name'] = ApiClient.convertToType(data['common_name'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('street_address')) {
                obj['street_address'] = ApiClient.convertToType(data['street_address'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('organizational_unit')) {
                obj['organizational_unit'] = ApiClient.convertToType(data['organizational_unit'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('key_type')) {
                obj['key_type'] = ApiClient.convertToType(data['key_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Subject Alternate Names - An array of one or more fully qualified domain names or public IP addresses to be secured by this certificate. Required.
 * @member {Array.<String>} sans
 */
TlsCsrDataAttributes.prototype['sans'] = undefined;

/**
 * Common Name (CN) - The fully qualified domain name (FQDN) to be secured by this certificate. The common name should be one of the entries in the SANs parameter.
 * @member {String} common_name
 */
TlsCsrDataAttributes.prototype['common_name'] = undefined;

/**
 * Country (C) - The two-letter ISO country code where the organization is located.
 * @member {String} country
 */
TlsCsrDataAttributes.prototype['country'] = undefined;

/**
 * State (S) - The state, province, region, or county where the organization is located. This should not be abbreviated.
 * @member {String} state
 */
TlsCsrDataAttributes.prototype['state'] = undefined;

/**
 * Locality (L) - The locality, city, town, or village where the organization is located.
 * @member {String} city
 */
TlsCsrDataAttributes.prototype['city'] = undefined;

/**
 * Postal Code - The postal code where the organization is located.
 * @member {String} postal_code
 */
TlsCsrDataAttributes.prototype['postal_code'] = undefined;

/**
 * Street Address - The street address where the organization is located.
 * @member {String} street_address
 */
TlsCsrDataAttributes.prototype['street_address'] = undefined;

/**
 * Organization (O) - The legal name of the organization, including any suffixes. This should not be abbreviated.
 * @member {String} organization
 */
TlsCsrDataAttributes.prototype['organization'] = undefined;

/**
 * Organizational Unit (OU) - The internal division of the organization managing the certificate.
 * @member {String} organizational_unit
 */
TlsCsrDataAttributes.prototype['organizational_unit'] = undefined;

/**
 * Email Address (EMAIL) - The organizational contact for this.
 * @member {String} email
 */
TlsCsrDataAttributes.prototype['email'] = undefined;

/**
 * CSR Key Type.
 * @member {module:model/TlsCsrDataAttributes.KeyTypeEnum} key_type
 */
TlsCsrDataAttributes.prototype['key_type'] = undefined;





/**
 * Allowed values for the <code>key_type</code> property.
 * @enum {String}
 * @readonly
 */
TlsCsrDataAttributes['KeyTypeEnum'] = {

    /**
     * value: "RSA2048"
     * @const
     */
    "RSA2048": "RSA2048",

    /**
     * value: "ECDSA256"
     * @const
     */
    "ECDSA256": "ECDSA256"
};



export default TlsCsrDataAttributes;

