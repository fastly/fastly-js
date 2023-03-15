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
import RelationshipTlsActivationTlsActivation from './RelationshipTlsActivationTlsActivation';
import RelationshipTlsActivations from './RelationshipTlsActivations';
import RelationshipTlsDomainsTlsDomains from './RelationshipTlsDomainsTlsDomains';

/**
 * The RelationshipsForTlsPrivateKey model module.
 * @module model/RelationshipsForTlsPrivateKey
 * @version 3.1.1
 */
class RelationshipsForTlsPrivateKey {
    /**
     * Constructs a new <code>RelationshipsForTlsPrivateKey</code>.
     * @alias module:model/RelationshipsForTlsPrivateKey
     * @implements module:model/RelationshipTlsActivations
     */
    constructor() { 
        RelationshipTlsActivations.initialize(this);
        RelationshipsForTlsPrivateKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipsForTlsPrivateKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsPrivateKey} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsPrivateKey} The populated <code>RelationshipsForTlsPrivateKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipsForTlsPrivateKey();
            RelationshipTlsActivations.constructFromObject(data, obj);

            if (data.hasOwnProperty('tls_activations')) {
                obj['tls_activations'] = RelationshipTlsActivationTlsActivation.constructFromObject(data['tls_activations']);
            }
            if (data.hasOwnProperty('tls_domains')) {
                obj['tls_domains'] = RelationshipTlsDomainsTlsDomains.constructFromObject(data['tls_domains']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipTlsActivationTlsActivation} tls_activations
 */
RelationshipsForTlsPrivateKey.prototype['tls_activations'] = undefined;

/**
 * @member {module:model/RelationshipTlsDomainsTlsDomains} tls_domains
 */
RelationshipsForTlsPrivateKey.prototype['tls_domains'] = undefined;


// Implement RelationshipTlsActivations interface:
/**
 * @member {module:model/RelationshipTlsActivationTlsActivation} tls_activations
 */
RelationshipTlsActivations.prototype['tls_activations'] = undefined;




export default RelationshipsForTlsPrivateKey;

