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
import RelationshipTlsSubscriptionTlsSubscription from './RelationshipTlsSubscriptionTlsSubscription';

/**
 * The RelationshipTlsSubscriptions model module.
 * @module model/RelationshipTlsSubscriptions
 * @version 4.2.0
 */
class RelationshipTlsSubscriptions {
    /**
     * Constructs a new <code>RelationshipTlsSubscriptions</code>.
     * @alias module:model/RelationshipTlsSubscriptions
     */
    constructor() { 
        
        RelationshipTlsSubscriptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipTlsSubscriptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsSubscriptions} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsSubscriptions} The populated <code>RelationshipTlsSubscriptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipTlsSubscriptions();

            if (data.hasOwnProperty('tls_subscriptions')) {
                obj['tls_subscriptions'] = RelationshipTlsSubscriptionTlsSubscription.constructFromObject(data['tls_subscriptions']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipTlsSubscriptionTlsSubscription} tls_subscriptions
 */
RelationshipTlsSubscriptions.prototype['tls_subscriptions'] = undefined;






export default RelationshipTlsSubscriptions;

