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
import RelationshipsForTlsActivation from './RelationshipsForTlsActivation';
import TypeTlsActivation from './TypeTlsActivation';

/**
 * The TlsActivationData model module.
 * @module model/TlsActivationData
 * @version 4.3.0
 */
class TlsActivationData {
    /**
     * Constructs a new <code>TlsActivationData</code>.
     * @alias module:model/TlsActivationData
     */
    constructor() { 
        
        TlsActivationData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsActivationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsActivationData} obj Optional instance to populate.
     * @return {module:model/TlsActivationData} The populated <code>TlsActivationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsActivationData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsActivation.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForTlsActivation.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeTlsActivation} type
 */
TlsActivationData.prototype['type'] = undefined;

/**
 * @member {module:model/RelationshipsForTlsActivation} relationships
 */
TlsActivationData.prototype['relationships'] = undefined;






export default TlsActivationData;

