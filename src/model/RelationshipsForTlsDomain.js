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
import RelationshipTlsActivationTlsActivation from './RelationshipTlsActivationTlsActivation';
import RelationshipTlsSubscriptionTlsSubscription from './RelationshipTlsSubscriptionTlsSubscription';
import RelationshipTlsSubscriptions from './RelationshipTlsSubscriptions';

/**
 * The RelationshipsForTlsDomain model module.
 * @module model/RelationshipsForTlsDomain
 * @version 14.1.0
 */
class RelationshipsForTlsDomain {
    /**
     * Constructs a new <code>RelationshipsForTlsDomain</code>.
     * @alias module:model/RelationshipsForTlsDomain
     * @implements module:model/RelationshipTlsSubscriptions
     */
    constructor() { 
        RelationshipTlsSubscriptions.initialize(this);
        RelationshipsForTlsDomain.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipsForTlsDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForTlsDomain} obj Optional instance to populate.
     * @return {module:model/RelationshipsForTlsDomain} The populated <code>RelationshipsForTlsDomain</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipsForTlsDomain();
            RelationshipTlsSubscriptions.constructFromObject(data, obj);

            if (data.hasOwnProperty('tls_subscriptions')) {
                obj['tls_subscriptions'] = RelationshipTlsSubscriptionTlsSubscription.constructFromObject(data['tls_subscriptions']);
            }
            if (data.hasOwnProperty('tls_activations')) {
                obj['tls_activations'] = RelationshipTlsActivationTlsActivation.constructFromObject(data['tls_activations']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipTlsSubscriptionTlsSubscription} tls_subscriptions
 */
RelationshipsForTlsDomain.prototype['tls_subscriptions'] = undefined;

/**
 * @member {module:model/RelationshipTlsActivationTlsActivation} tls_activations
 */
RelationshipsForTlsDomain.prototype['tls_activations'] = undefined;


// Implement RelationshipTlsSubscriptions interface:
/**
 * @member {module:model/RelationshipTlsSubscriptionTlsSubscription} tls_subscriptions
 */
RelationshipTlsSubscriptions.prototype['tls_subscriptions'] = undefined;




export default RelationshipsForTlsDomain;

