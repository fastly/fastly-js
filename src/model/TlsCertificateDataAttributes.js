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
 * The TlsCertificateDataAttributes model module.
 * @module model/TlsCertificateDataAttributes
 * @version 12.1.0
 */
class TlsCertificateDataAttributes {
    /**
     * Constructs a new <code>TlsCertificateDataAttributes</code>.
     * @alias module:model/TlsCertificateDataAttributes
     */
    constructor() { 
        
        TlsCertificateDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsCertificateDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCertificateDataAttributes} obj Optional instance to populate.
     * @return {module:model/TlsCertificateDataAttributes} The populated <code>TlsCertificateDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsCertificateDataAttributes();

            if (data.hasOwnProperty('cert_blob')) {
                obj['cert_blob'] = ApiClient.convertToType(data['cert_blob'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('allow_untrusted_root')) {
                obj['allow_untrusted_root'] = ApiClient.convertToType(data['allow_untrusted_root'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The PEM-formatted certificate blob. Required.
 * @member {String} cert_blob
 */
TlsCertificateDataAttributes.prototype['cert_blob'] = undefined;

/**
 * A customizable name for your certificate. Defaults to the certificate's Common Name or first Subject Alternative Names (SAN) entry. Optional.
 * @member {String} name
 */
TlsCertificateDataAttributes.prototype['name'] = undefined;

/**
 * Indicates that the supplied certificate was not signed by a trusted CA.
 * @member {Boolean} allow_untrusted_root
 */
TlsCertificateDataAttributes.prototype['allow_untrusted_root'] = undefined;






export default TlsCertificateDataAttributes;

