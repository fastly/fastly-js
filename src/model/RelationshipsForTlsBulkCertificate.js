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
import RelationshipTlsConfigurations from './RelationshipTlsConfigurations';
import RelationshipTlsConfigurationsTlsConfigurations from './RelationshipTlsConfigurationsTlsConfigurations';
import RelationshipTlsDomainsTlsDomains from './RelationshipTlsDomainsTlsDomains';

/**
 * The RelationshipsForTlsBulkCertificate model module.
 * @module model/RelationshipsForTlsBulkCertificate
 * @version 4.2.0
 */
class RelationshipsForTlsBulkCertificate {
    /**
     * Constructs a new <code>RelationshipsForTlsBulkCertificate</code>.
     * @alias module:model/RelationshipsForTlsBulkCertificate
     * @implements module:model/RelationshipTlsConfigurations
     */
    constructor() { 
        RelationshipTlsConfigurations.initialize(this);
        RelationshipsForTlsBulkCertificate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipsForTlsBulkCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsBulkCertificate} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsBulkCertificate} The populated <code>RelationshipsForTlsBulkCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipsForTlsBulkCertificate();
            RelationshipTlsConfigurations.constructFromObject(data, obj);

            if (data.hasOwnProperty('tls_configurations')) {
                obj['tls_configurations'] = RelationshipTlsConfigurationsTlsConfigurations.constructFromObject(data['tls_configurations']);
            }
            if (data.hasOwnProperty('tls_domains')) {
                obj['tls_domains'] = RelationshipTlsDomainsTlsDomains.constructFromObject(data['tls_domains']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipTlsConfigurationsTlsConfigurations} tls_configurations
 */
RelationshipsForTlsBulkCertificate.prototype['tls_configurations'] = undefined;

/**
 * @member {module:model/RelationshipTlsDomainsTlsDomains} tls_domains
 */
RelationshipsForTlsBulkCertificate.prototype['tls_domains'] = undefined;


// Implement RelationshipTlsConfigurations interface:
/**
 * @member {module:model/RelationshipTlsConfigurationsTlsConfigurations} tls_configurations
 */
RelationshipTlsConfigurations.prototype['tls_configurations'] = undefined;




export default RelationshipsForTlsBulkCertificate;

