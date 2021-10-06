"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipService = _interopRequireDefault(require("./RelationshipService"));

var _ServiceInvitationDataAttributes = _interopRequireDefault(require("./ServiceInvitationDataAttributes"));

var _TypeServiceInvitation = _interopRequireDefault(require("./TypeServiceInvitation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceInvitationData model module.
 * @module model/ServiceInvitationData
 * @version 3.0.0-alpha1
 */
var ServiceInvitationData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceInvitationData</code>.
   * @alias module:model/ServiceInvitationData
   */
  function ServiceInvitationData() {
    _classCallCheck(this, ServiceInvitationData);

    ServiceInvitationData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceInvitationData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceInvitationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceInvitationData} obj Optional instance to populate.
     * @return {module:model/ServiceInvitationData} The populated <code>ServiceInvitationData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceInvitationData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ServiceInvitationDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _ApiClient["default"].convertToType(data['relationships'], _RelationshipService["default"]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeServiceInvitation["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return ServiceInvitationData;
}();
/**
 * @member {module:model/ServiceInvitationDataAttributes} attributes
 */


ServiceInvitationData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipService} relationships
 */

ServiceInvitationData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeServiceInvitation} type
 */

ServiceInvitationData.prototype['type'] = undefined;
var _default = ServiceInvitationData;
exports["default"] = _default;