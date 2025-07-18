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
 * The TlsSubscriptionDataAttributes model module.
 * @module model/TlsSubscriptionDataAttributes
 * @version 12.1.0
 */
class TlsSubscriptionDataAttributes {
    /**
     * Constructs a new <code>TlsSubscriptionDataAttributes</code>.
     * @alias module:model/TlsSubscriptionDataAttributes
     */
    constructor() { 
        
        TlsSubscriptionDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsSubscriptionDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsSubscriptionDataAttributes} obj Optional instance to populate.
     * @return {module:model/TlsSubscriptionDataAttributes} The populated <code>TlsSubscriptionDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsSubscriptionDataAttributes();

            if (data.hasOwnProperty('certificate_authority')) {
                obj['certificate_authority'] = ApiClient.convertToType(data['certificate_authority'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The entity that issues and certifies the TLS certificates for your subscription, either `certainly`, `lets-encrypt`, or `globalsign`. To migrate the subscription from one certificate authority to another, such as to migrate from 'lets-encrypt' to 'certainly',  pass `certificate_authority` to the PATCH endpoint. To migrate from 'globalsign' to 'certainly', contact Fastly Support.
 * @member {module:model/TlsSubscriptionDataAttributes.CertificateAuthorityEnum} certificate_authority
 */
TlsSubscriptionDataAttributes.prototype['certificate_authority'] = undefined;





/**
 * Allowed values for the <code>certificate_authority</code> property.
 * @enum {String}
 * @readonly
 */
TlsSubscriptionDataAttributes['CertificateAuthorityEnum'] = {

    /**
     * value: "certainly"
     * @const
     */
    "certainly": "certainly",

    /**
     * value: "lets-encrypt"
     * @const
     */
    "lets-encrypt": "lets-encrypt",

    /**
     * value: "globalsign"
     * @const
     */
    "globalsign": "globalsign"
};



export default TlsSubscriptionDataAttributes;

