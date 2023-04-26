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
import ServiceInvitationDataAttributes from './ServiceInvitationDataAttributes';
import ServiceInvitationDataRelationships from './ServiceInvitationDataRelationships';
import TypeServiceInvitation from './TypeServiceInvitation';

/**
 * The ServiceInvitationData model module.
 * @module model/ServiceInvitationData
 * @version 3.3.1
 */
class ServiceInvitationData {
    /**
     * Constructs a new <code>ServiceInvitationData</code>.
     * @alias module:model/ServiceInvitationData
     */
    constructor() { 
        
        ServiceInvitationData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceInvitationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceInvitationData} obj Optional instance to populate.
     * @return {module:model/ServiceInvitationData} The populated <code>ServiceInvitationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceInvitationData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeServiceInvitation.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ServiceInvitationDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = ServiceInvitationDataRelationships.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeServiceInvitation} type
 */
ServiceInvitationData.prototype['type'] = undefined;

/**
 * @member {module:model/ServiceInvitationDataAttributes} attributes
 */
ServiceInvitationData.prototype['attributes'] = undefined;

/**
 * @member {module:model/ServiceInvitationDataRelationships} relationships
 */
ServiceInvitationData.prototype['relationships'] = undefined;






export default ServiceInvitationData;

