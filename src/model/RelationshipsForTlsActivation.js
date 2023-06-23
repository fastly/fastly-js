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
import RelationshipTlsCertificate from './RelationshipTlsCertificate';
import RelationshipTlsCertificateTlsCertificate from './RelationshipTlsCertificateTlsCertificate';
import RelationshipTlsConfiguration from './RelationshipTlsConfiguration';
import RelationshipTlsConfigurationTlsConfiguration from './RelationshipTlsConfigurationTlsConfiguration';
import RelationshipTlsDomain from './RelationshipTlsDomain';
import RelationshipTlsDomainTlsDomain from './RelationshipTlsDomainTlsDomain';

/**
 * The RelationshipsForTlsActivation model module.
 * @module model/RelationshipsForTlsActivation
 * @version 4.2.2
 */
class RelationshipsForTlsActivation {
    /**
     * Constructs a new <code>RelationshipsForTlsActivation</code>.
     * @alias module:model/RelationshipsForTlsActivation
     * @implements module:model/RelationshipTlsCertificate
     * @implements module:model/RelationshipTlsConfiguration
     * @implements module:model/RelationshipTlsDomain
     */
    constructor() { 
        RelationshipTlsCertificate.initialize(this);RelationshipTlsConfiguration.initialize(this);RelationshipTlsDomain.initialize(this);
        RelationshipsForTlsActivation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipsForTlsActivation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsActivation} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsActivation} The populated <code>RelationshipsForTlsActivation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipsForTlsActivation();
            RelationshipTlsCertificate.constructFromObject(data, obj);
            RelationshipTlsConfiguration.constructFromObject(data, obj);
            RelationshipTlsDomain.constructFromObject(data, obj);

            if (data.hasOwnProperty('tls_certificate')) {
                obj['tls_certificate'] = RelationshipTlsCertificateTlsCertificate.constructFromObject(data['tls_certificate']);
            }
            if (data.hasOwnProperty('tls_configuration')) {
                obj['tls_configuration'] = RelationshipTlsConfigurationTlsConfiguration.constructFromObject(data['tls_configuration']);
            }
            if (data.hasOwnProperty('tls_domain')) {
                obj['tls_domain'] = RelationshipTlsDomainTlsDomain.constructFromObject(data['tls_domain']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipTlsCertificateTlsCertificate} tls_certificate
 */
RelationshipsForTlsActivation.prototype['tls_certificate'] = undefined;

/**
 * @member {module:model/RelationshipTlsConfigurationTlsConfiguration} tls_configuration
 */
RelationshipsForTlsActivation.prototype['tls_configuration'] = undefined;

/**
 * @member {module:model/RelationshipTlsDomainTlsDomain} tls_domain
 */
RelationshipsForTlsActivation.prototype['tls_domain'] = undefined;


// Implement RelationshipTlsCertificate interface:
/**
 * @member {module:model/RelationshipTlsCertificateTlsCertificate} tls_certificate
 */
RelationshipTlsCertificate.prototype['tls_certificate'] = undefined;
// Implement RelationshipTlsConfiguration interface:
/**
 * @member {module:model/RelationshipTlsConfigurationTlsConfiguration} tls_configuration
 */
RelationshipTlsConfiguration.prototype['tls_configuration'] = undefined;
// Implement RelationshipTlsDomain interface:
/**
 * @member {module:model/RelationshipTlsDomainTlsDomain} tls_domain
 */
RelationshipTlsDomain.prototype['tls_domain'] = undefined;




export default RelationshipsForTlsActivation;

