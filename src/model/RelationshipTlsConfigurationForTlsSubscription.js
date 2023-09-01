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
import RelationshipTlsConfigurationTlsConfiguration from './RelationshipTlsConfigurationTlsConfiguration';

/**
 * The RelationshipTlsConfigurationForTlsSubscription model module.
 * @module model/RelationshipTlsConfigurationForTlsSubscription
 * @version 6.1.0
 */
class RelationshipTlsConfigurationForTlsSubscription {
    /**
     * Constructs a new <code>RelationshipTlsConfigurationForTlsSubscription</code>.
     * The unique identifier for the set of TLS configuration options that apply to the enabled domains on this subscription. Write-only on create.
     * @alias module:model/RelationshipTlsConfigurationForTlsSubscription
     */
    constructor() { 
        
        RelationshipTlsConfigurationForTlsSubscription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipTlsConfigurationForTlsSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsConfigurationForTlsSubscription} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsConfigurationForTlsSubscription} The populated <code>RelationshipTlsConfigurationForTlsSubscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipTlsConfigurationForTlsSubscription();

            if (data.hasOwnProperty('tls_configuration')) {
                obj['tls_configuration'] = RelationshipTlsConfigurationTlsConfiguration.constructFromObject(data['tls_configuration']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipTlsConfigurationTlsConfiguration} tls_configuration
 */
RelationshipTlsConfigurationForTlsSubscription.prototype['tls_configuration'] = undefined;






export default RelationshipTlsConfigurationForTlsSubscription;

