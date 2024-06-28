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
import RelationshipCommonName from './RelationshipCommonName';
import RelationshipMemberTlsDomain from './RelationshipMemberTlsDomain';
import RelationshipTlsCertificates from './RelationshipTlsCertificates';
import RelationshipTlsCertificatesTlsCertificates from './RelationshipTlsCertificatesTlsCertificates';
import RelationshipTlsConfigurationForTlsSubscription from './RelationshipTlsConfigurationForTlsSubscription';
import RelationshipTlsConfigurationTlsConfiguration from './RelationshipTlsConfigurationTlsConfiguration';
import RelationshipTlsDomains from './RelationshipTlsDomains';
import RelationshipTlsDomainsTlsDomains from './RelationshipTlsDomainsTlsDomains';

/**
 * The RelationshipsForTlsSubscription model module.
 * @module model/RelationshipsForTlsSubscription
 * @version 7.4.0
 */
class RelationshipsForTlsSubscription {
    /**
     * Constructs a new <code>RelationshipsForTlsSubscription</code>.
     * @alias module:model/RelationshipsForTlsSubscription
     * @implements module:model/RelationshipTlsConfigurationForTlsSubscription
     * @implements module:model/RelationshipCommonName
     * @implements module:model/RelationshipTlsDomains
     * @implements module:model/RelationshipTlsCertificates
     */
    constructor() { 
        RelationshipTlsConfigurationForTlsSubscription.initialize(this);RelationshipCommonName.initialize(this);RelationshipTlsDomains.initialize(this);RelationshipTlsCertificates.initialize(this);
        RelationshipsForTlsSubscription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipsForTlsSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsSubscription} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsSubscription} The populated <code>RelationshipsForTlsSubscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipsForTlsSubscription();
            RelationshipTlsConfigurationForTlsSubscription.constructFromObject(data, obj);
            RelationshipCommonName.constructFromObject(data, obj);
            RelationshipTlsDomains.constructFromObject(data, obj);
            RelationshipTlsCertificates.constructFromObject(data, obj);

            if (data.hasOwnProperty('tls_configuration')) {
                obj['tls_configuration'] = RelationshipTlsConfigurationTlsConfiguration.constructFromObject(data['tls_configuration']);
            }
            if (data.hasOwnProperty('common_name')) {
                obj['common_name'] = RelationshipMemberTlsDomain.constructFromObject(data['common_name']);
            }
            if (data.hasOwnProperty('tls_domains')) {
                obj['tls_domains'] = RelationshipTlsDomainsTlsDomains.constructFromObject(data['tls_domains']);
            }
            if (data.hasOwnProperty('tls_certificates')) {
                obj['tls_certificates'] = RelationshipTlsCertificatesTlsCertificates.constructFromObject(data['tls_certificates']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipTlsConfigurationTlsConfiguration} tls_configuration
 */
RelationshipsForTlsSubscription.prototype['tls_configuration'] = undefined;

/**
 * @member {module:model/RelationshipMemberTlsDomain} common_name
 */
RelationshipsForTlsSubscription.prototype['common_name'] = undefined;

/**
 * @member {module:model/RelationshipTlsDomainsTlsDomains} tls_domains
 */
RelationshipsForTlsSubscription.prototype['tls_domains'] = undefined;

/**
 * @member {module:model/RelationshipTlsCertificatesTlsCertificates} tls_certificates
 */
RelationshipsForTlsSubscription.prototype['tls_certificates'] = undefined;


// Implement RelationshipTlsConfigurationForTlsSubscription interface:
/**
 * @member {module:model/RelationshipTlsConfigurationTlsConfiguration} tls_configuration
 */
RelationshipTlsConfigurationForTlsSubscription.prototype['tls_configuration'] = undefined;
// Implement RelationshipCommonName interface:
/**
 * @member {module:model/RelationshipMemberTlsDomain} common_name
 */
RelationshipCommonName.prototype['common_name'] = undefined;
// Implement RelationshipTlsDomains interface:
/**
 * @member {module:model/RelationshipTlsDomainsTlsDomains} tls_domains
 */
RelationshipTlsDomains.prototype['tls_domains'] = undefined;
// Implement RelationshipTlsCertificates interface:
/**
 * @member {module:model/RelationshipTlsCertificatesTlsCertificates} tls_certificates
 */
RelationshipTlsCertificates.prototype['tls_certificates'] = undefined;




export default RelationshipsForTlsSubscription;

