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
import Timestamps from './Timestamps';
import TlsActivationData from './TlsActivationData';
import TlsActivationResponseDataAllOf from './TlsActivationResponseDataAllOf';
import TypeTlsActivation from './TypeTlsActivation';

/**
 * The TlsActivationResponseData model module.
 * @module model/TlsActivationResponseData
 * @version 6.2.1
 */
class TlsActivationResponseData {
    /**
     * Constructs a new <code>TlsActivationResponseData</code>.
     * @alias module:model/TlsActivationResponseData
     * @implements module:model/TlsActivationData
     * @implements module:model/TlsActivationResponseDataAllOf
     */
    constructor() { 
        TlsActivationData.initialize(this);TlsActivationResponseDataAllOf.initialize(this);
        TlsActivationResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsActivationResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsActivationResponseData} obj Optional instance to populate.
     * @return {module:model/TlsActivationResponseData} The populated <code>TlsActivationResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsActivationResponseData();
            TlsActivationData.constructFromObject(data, obj);
            TlsActivationResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsActivation.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForTlsActivation.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = Timestamps.constructFromObject(data['attributes']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeTlsActivation} type
 */
TlsActivationResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/RelationshipsForTlsActivation} relationships
 */
TlsActivationResponseData.prototype['relationships'] = undefined;

/**
 * @member {String} id
 */
TlsActivationResponseData.prototype['id'] = undefined;

/**
 * @member {module:model/Timestamps} attributes
 */
TlsActivationResponseData.prototype['attributes'] = undefined;


// Implement TlsActivationData interface:
/**
 * @member {module:model/TypeTlsActivation} type
 */
TlsActivationData.prototype['type'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsActivation} relationships
 */
TlsActivationData.prototype['relationships'] = undefined;
// Implement TlsActivationResponseDataAllOf interface:
/**
 * @member {String} id
 */
TlsActivationResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */
TlsActivationResponseDataAllOf.prototype['attributes'] = undefined;




export default TlsActivationResponseData;

